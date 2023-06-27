import { Shipment } from "../../api/types";

interface TableProps {
  value: string;
  shipments: Array<Shipment>;
}

// shipments table
// receives shipments array info from buildShipments[] in each WS
// each shipment: cost, desc, id, orderNum
// 

// todo
// receive array of shipments
// iterate through each shipment
// render details in table
export default function Table(props: TableProps) {

  return (
    <div>
      <h1>Table View - receives data, renders in table</h1>
      <div key={props.value}>
        {/* map table data here */}
        <p>{props.shipments[0].description}</p>
        <table style={{ width: 500 }}>
          <tbody>
            <tr>
              <td>table data</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
