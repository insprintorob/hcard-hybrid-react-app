import hCardRepository from "./hcard-repository";
import HCard from "./hcard";

/**
 * This function handles all of the database saving logic.
 *
 * It means that the submit request handler can be single purpose and handle the request with no knowledge of the database.
 *
 * @param hCard
 */
export default function saveHCard(hCard : HCard) {
    hCardRepository.addOne(hCard);
}