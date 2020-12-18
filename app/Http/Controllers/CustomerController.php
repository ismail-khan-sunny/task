<?php

namespace App\Http\Controllers;

use App\Customer;
use App\Service;
use App\CustomerService;
use Illuminate\Http\Request;

use App\Http\Resources\Customer as CustomerResource;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //Controller.model.stub
        $query = Customer::latest();
        if (!empty($request->field_name) & !empty($request->value)) {
            $query->where($request->field_name, 'like', '%' . $request->value . '%');
        }

        $datas = $query->paginate(20);
        if ($request->format() == 'html') {
            return view('layouts.web');
            
        } else {
            return new CustomerResource($datas);
        }
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('layouts.web');
    }
    protected function getData(Request $request)
    {
        $rules = [
            'name' => 'required',
            'mobile' => 'required',
            'address' => 'required',
            'email' => 'required',
        ];
        return $request->validate($rules);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($this->getData($request)) :
            Customer::create($request->all());
            return response()->json(['success' => 'Done!']);
        endif;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Customer  $section
     * @return \Illuminate\Http\Response
     */

    public function show(Request $request, $id)
    {
        if ($request->format() == 'html') {
            return view('layouts.web');
        } else {
            $data=array();
            $data['customer'] = Customer::findOrFail($id);
            $data['service'] = Service::with(['service_details:id,service_id,name,type'])->get()->each(function ($s_detail) use ($id) {
                if(!empty($s_detail->service_details)){
                    foreach($s_detail->service_details as $key=>$value){
                        $value1="";
                        $CustomerService= CustomerService::where('customer_id', $id)->where('service_detail_id', $value->id)->first();
                        // dd($id);
                        if(!empty($CustomerService)){
                            $value1= $CustomerService->value;
                        }
                        $value->value= $value1;
                    }
               }
                return $s_detail;
            });
            return $data;
        }
       
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Customer  $section
     * @return \Illuminate\Http\Response
     */
    public function edit(Customer $section)
    {
        return view('layouts.web');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Customer  $section
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if ($this->getData($request)) :
            $Customer = Customer::find($id);
            $Customer->update($request->all());
        endif;
        return response()->json(['success' => 'Done!']);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Customer  $section
     * @return \Illuminate\Http\Response
     */

    public function destroy($id)
    {
        $Customer = Customer::find($id);
        if ($Customer->delete()) {
            return 'deleted';
        } else {
            return 'failed';
        }
    }
}
