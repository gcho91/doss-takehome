import { useState } from "react";
import { Shipment } from "../../api/types";
import '../style/Table.css'

interface TableProps {
  id: string;
  buildNumber: string;
  shipments: Shipment[];
}

export default function Table(props: TableProps) {
  const { id, buildNumber, shipments } = props;
  const [mockTableRows, setMockTableRows] = useState<Shipment[]>([])

  const mockAddNewShipment = () => {
    console.log('mock add new shipment ')
    let row = {
      id: "12345",
      description: "abc",
      orderNumber: "asdfdfadsfsf",
      cost: 12345222
    }
    setMockTableRows([...mockTableRows, row])
  }

  return (
    <div>
      <div className="label-row">
        <p style={{ margin: "auto 0" }}>Table </p>
        <button className="button" onClick={mockAddNewShipment} > Add Shipment </button>
      </div>
      {/* <p style={{ fontSize: "10px" }}>ShipmentTable id: {id}</p>
      <p style={{ fontSize: "10px" }}>ShipmentTable buildNumber: {buildNumber}</p> */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Order Number</th>
            <th>Cost</th>
          </tr>
        </thead>

        <tbody>
          {shipments.map((value, key) => {
            return (
              <tr key={key}>
                <td>{value.id}</td>
                <td>{value.description}</td>
                <td>{value.orderNumber}</td>
                <td>{value.cost}</td>
              </tr>
            )
          })}
          {mockTableRows.length > 0 &&
            mockTableRows.map((value, key) => {
              return (
                <tr key={key}>
                  <td>{value.id}</td>
                  <td>{value.description}</td>
                  <td>{value.orderNumber}</td>
                  <td>{value.cost}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <AddNewRow />
    </div>
  )
}


export const AddNewRow = () => {
  return <div>Add new row UI</div>
}

interface ButtonProps {
  buttonText: string;
}
