import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function QuantityEditor() {
    return (
        <div className="">
            <span>
                <FontAwesomeIcon icon={faMinus} />
            </span>
            <span>
                
            </span>
            <span>
                <FontAwesomeIcon icon={faPlus} />
            </span>
        </div>
    )
}
