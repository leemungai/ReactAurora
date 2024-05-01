function AddItems({ showAdd }) {
  if (showAdd === false) {
    return null;
  }

  return (
    <div>
      <h1>Add Item</h1>
      <div>
        <div className="form-row align-items-center">
          <div className="col-auto">
            <label className="sr-only" for="inlineFormInput">
              SN
            </label>
            <input
              type="text"
              className="form-control mb-2"
              id="inlineFormInput"
              placeholder="Jane Doe"
            />
          </div>
          <div className="col-auto">
            <label className="sr-only" for="inlineFormInputGroup">
              Name
            </label>
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                id="inlineFormInputGroup"
                placeholder="Item Name"
              />
            </div>
          </div>
          <div className="col-auto">
            <label className="sr-only" for="inlineFormInputGroup">
              Price
            </label>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">KES</div>
              </div>
              <input
                type="number"
                className="form-control"
                id="inlineFormInputGroup"
                placeholder="Price"
              />
            </div>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-2">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddItems;
