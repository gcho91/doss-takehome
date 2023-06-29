import { Shipment } from "../../api/types";
import '../style/Table.css'

interface TableProps {
  id: string;
  buildNumber: string;
  shipments: Shipment[];
}

export default function Table(props: TableProps) {
  const { id, buildNumber, shipments } = props;

  return (
    <div>
      <h3>Table </h3>
      {/* <p style={{ fontSize: "10px" }}>ShipmentTable id: {id}</p>
      <p style={{ fontSize: "10px" }}>ShipmentTable buildNumber: {buildNumber}</p> */}
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Desc</th>
            <th>orderNumber</th>
            <th>cost</th>
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
        </tbody>
      </table>
    </div>
  )
}
