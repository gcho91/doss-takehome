import { useEffect } from "react";
import { ShipmentTable } from "../../api/types"

interface BuildShipmentProps {
    buildShipment: ShipmentTable;
}

export default function BuildShipment({ buildShipment }: BuildShipmentProps) {
    // useEffect(() => {
    //     console.log(buildShipment.shipments, "shipments in componennt")
    // })
    return <div className='build-shipments'>
        <p>Build Number: {buildShipment.buildNumber} </p>
        <p>id: {buildShipment.id}</p>
        <div>
            <p>shipments[]: shipments table </p>
        </div>
    </div>
}