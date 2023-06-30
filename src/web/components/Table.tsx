import { useState } from 'react'
import { Shipment } from '../../api/types'
import '../style/Table.css'

interface TableProps {
  id: string
  buildNumber: string
  shipments: Shipment[]
}

export default function Table(props: TableProps) {
  const { shipments } = props
  const [mockTableRows, setMockTableRows] = useState<Shipment[]>([])

  const mockAddNewShipment = () => {
    let row = {
      id: '12345',
      description: 'abc',
      orderNumber: 'asdfdfadsfsf',
      cost: 12345222,
    }
    setMockTableRows([...mockTableRows, row])
  }

  return (
    <>
      <div className="table-header">
        <p>Shipments</p>
        <button className="table-header__button" onClick={mockAddNewShipment}>Add Shipment</button>
      </div>
      <table className="table-data">
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
            })}
        </tbody>
      </table>
    </>
  )
}