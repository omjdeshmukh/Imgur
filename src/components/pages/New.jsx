import React from 'react';
import './r.css';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";


function New() {
    return (
        <>
        <div className="newpost page">
        <h1>NEW POST HERE</h1>
            <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupFile01">Upload</label>
                <input type="file" class="form-control" id="inputGroupFile01" />
            </div>

            <div class="input-group mb-3">
                <input type="file" class="form-control" id="inputGroupFile02" />
                <label class="input-group-text" for="inputGroupFile02">Upload</label>
            </div>

            <div class="input-group mb-3">
                <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon03">Button</button>
                <input type="file" class="form-control" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
            </div>

            <div class="input-group">
                <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
            </div>
            </div>
        </>
    )
}

export default New;
