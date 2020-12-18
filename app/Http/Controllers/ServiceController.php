<?php

namespace App\Http\Controllers;

use App\Service;
use App\ServiceDetail;
use App\CustomerService;
use Illuminate\Http\Request;

use App\Http\Resources\Service as ServiceResource;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //Controller.model.stub
        $query = Service::with('service_details')->latest();
        if (!empty($request->field_name) & !empty($request->value)) {
            $query->where($request->field_name, 'like', '%' . $request->value . '%');
        }

        $datas = $query->paginate(20);
        if ($request->format() == 'html') {
            return view('layouts.web');
        } else {
            return new ServiceResource($datas);
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
            $data=  $request->only(['name']);
            $service=Service::create($data);
            $service->service_details()->createMany($request->all()['service_details']);
            return response()->json(['success' => 'Done!']);
        endif;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Service  $section
     * @return \Illuminate\Http\Response
     */

    public function show(Request $request, $id)
    {
        if ($request->format() == 'html') {
            return view('layouts.web');
        } else {
            $Service = Service::with('service_details')->findOrFail($id);
            return $Service;
        }
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Service  $section
     * @return \Illuminate\Http\Response
     */
    public function edit(Service $section)
    {
        return view('layouts.web');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Service  $section
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if ($this->getData($request)) :
            $data =  $request->only(['name']);
            $Service = Service::find($id);
            $Service->update($data);
            foreach ($request->all()['service_details']as $key => $value) {
                if (!empty($value['id'])) {
                    $ServiceDetail = ServiceDetail::find($value['id']);
                    $ServiceDetail->update($value);
                } else {
                    $value['service_id']= $id;
                    ServiceDetail::create($value);
                }
            }
        endif;
        return response()->json(['success' => 'Done!']);
    }
    public function service_detail_delete(Request $request)
    {
        $data= $request->all();
        $ServiceDetail = ServiceDetail::find($data['id']);
        if ($ServiceDetail->delete()) {
            return 'deleted';
        } else {
            return 'failed';
        }
    }
    public function CustomerServicePost(Request $request,$customer_id)
    {
        $data = $request->all();
        CustomerService::where('customer_id',$customer_id)->delete();
        foreach ($data as $key=>$value){
            foreach ($value['service_details'] as $key1 => $value1) {
                $data=array();
                $data['customer_id']= $customer_id;
                $data['service_id']= $value['id'];
                $data['service_detail_id']= $value1['id'];
                $data['value']= $value1['value'];
                CustomerService::create($data);
            }
        }
        return response()->json(['success' => 'Done!']);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Service  $section
     * @return \Illuminate\Http\Response
     */

    public function destroy($id)
    {
        $Service = Service::find($id);
        if ($Service->delete()) {
            $Service->service_details()->delete();
            return 'deleted';
        } else {
            return 'failed';
        }
    }
}
