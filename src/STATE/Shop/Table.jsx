function Table(props) {
  const { items } = props;

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">sn</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Update Price</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.sn}>
              <th scope="row">{item.sn}</th>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <div
                  className=""
                  style={{
                    width: "auto",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Update Price"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    style={{
                      width: "10em",
                    }}
                  />
                  <button className="btn btn-outline-secondary" type="button">
                    Button
                  </button>
                </div>
              </td>
              <td>
                <button type="button" className="btn btn-danger">
                  X
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
