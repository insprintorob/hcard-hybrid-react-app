import hCardRepository from "./hcard-repository";
import HCard from "./hcard";
import recentHCardRepository from "./recent-hcard-repository";

/**
 * This function handles all of the database saving logic.
 *
 * It means that the submit request handler can be single purpose and handle the request with no knowledge of the database.
 *
 * @param hCard
 */
export default async function saveHCard(hCard : HCard) {
    // Store in the main HCards collection
    await hCardRepository.addOne(hCard);

    // Purge previous latest card and add this card as the latest
    await recentHCardRepository.deleteAll();
    await recentHCardRepository.addOne(hCard);
}