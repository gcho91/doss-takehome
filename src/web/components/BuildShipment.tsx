import { ShipmentTable } from "../../api/types"
import Table from "./Table";

interface BuildShipmentProps {
    buildShipment: ShipmentTable;
}

export default function BuildShipment({ buildShipment }: BuildShipmentProps) {
    return <div className='build-shipments'>
        <p>Build Number: {buildShipment.buildNumber} </p>
        <p>id: {buildShipment.id}</p>
        <div>

            <Table id={buildShipment.id} buildNumber={buildShipment.buildNumber} shipments={buildShipment.shipments} />
        </div>
    </div>
}