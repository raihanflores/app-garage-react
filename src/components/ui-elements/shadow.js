import React, { useState } from 'react';
import Breadcrumb from '../common/breadcrumb';
const Shadow = () => {
  
        return (
            <div>
               <Breadcrumb parent = "UI-Element"  title = "Shadow" />
                <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="card box-shadow-title">
                  <div className="card-header">
                    <h5>Examples</h5><span>While shadows on components are disabled by default in Bootstrap and can be enabled via <code>$enable-shadows</code>, you can also quickly add or remove a shadow with our <code>box-shadow</code> utility classes. Includes support for <code>.shadow-none</code> and three default sizes (which have associated variables to match).</span>
                  </div>
                  <div className="card-body row">
                    <div className="col-12">
                      <h6 className="sub-title mt-0">Larger shadow</h6>
                    </div>
                    <div className="col-sm-4">
                      <div className="shadow-lg p-25 shadow-showcase text-center">
                        <h5 className="m-0 f-18">Larger shadow</h5>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="shadow-lg p-25 shadow-showcase text-center">
                        <h5 className="m-0 f-18">Larger shadow</h5>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="shadow-lg p-25 shadow-showcase text-center">
                        <h5 className="m-0 f-18">Larger shadow</h5>
                      </div>
                    </div>
                    <div className="col-12">
                      <h6 className="sub-title">Regular shadow</h6>
                    </div>
                    <div className="col-sm-4">
                      <div className="shadow shadow-showcase p-25 text-center">
                        <h5 className="m-0 f-18">Regular shadow</h5>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="shadow shadow-showcase p-25 text-center">
                        <h5 className="m-0 f-18">Regular shadow</h5>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="shadow shadow-showcase p-25 text-center">
                        <h5 className="m-0 f-18">Regular shadow</h5>
                      </div>
                    </div>
                    <div className="col-12">
                      <h6 className="sub-title">Small shadow</h6>
                    </div>
                    <div className="col-sm-4">
                      <div className="shadow-sm shadow-showcase p-25 text-center">
                        <h5 className="m-0 f-18">Small shadow</h5>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="shadow-sm shadow-showcase p-25 text-center">
                        <h5 className="m-0 f-18">Small shadow</h5>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="shadow-sm shadow-showcase p-25 text-center">
                        <h5 className="m-0 f-18">Small shadow</h5>
                      </div>
                    </div>
                    <div className="col-12">
                      <h6 className="sub-title">No shadow</h6>
                    </div>
                    <div className="col-sm-4">
                      <div className="shadow-none shadow-showcase p-25 text-center">
                        <h5 className="m-0 f-18">No shadow</h5>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="shadow-none shadow-showcase p-25 text-center">
                        <h5 className="m-0 f-18">No shadow</h5>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="shadow-sm shadow-showcase shadow-none p-25 text-center">
                        <h5 className="m-0 f-18">No shadow</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
        );
    
}

export default Shadow;