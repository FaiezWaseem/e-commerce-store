import React from 'react'

export default function MetaTagForm() {
  return (
<div className="form-box bg-white mt-4">
                <div className="form-box-title px-3 py-2">
                    Meta Tags
                </div>
                <div className="form-box-content p-3">
                    <div className="row">
                        <div className="col-md-2">
                            <label>Meta Title</label>
                        </div>
                        <div className="col-md-10">
                            <input type="text" className="form-control mb-3" value="" placeholder="Meta Title"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Description</label>
                        </div>
                        <div className="col-md-10">
                            <textarea name="meta_description" rows="8" className="form-control mb-3"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label>Meta Image</label>
                        </div>
                        <div className="col-md-10">
                            <div className="row">
                            </div>
                            <input type="file" name="meta_img" id="file-5" className="custom-input-file custom-input-file--4" data-multiple-caption="{count} files selected" accept="image/*"/>
                            <label for="file-5" className="mw-100 mb-3">
                                <span></span>
                                <strong>
                                    <i className="fa fa-upload"></i>
                                    Choose Image
                                </strong>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
  )
}
