/**
 * Model class for a HCard
 *
 * An instance of this class can be written to MongoDB directly
 */
export default class HCard {
    private givenName : string;
    private surname : string;
    private email : string;
    private phone : number;
    private houseNameOrNumber : string;
    private street : string;
    private suburb : string;
    private state : string;
    private postcode : number;
    private country : string;

    setGivenName(givenName : string) : void {
        this.givenName = givenName;
    }

    setSurname(surname : string) : void {
        this.surname = surname;
    }

    setEmail(email : string) : void {
        this.email = email;
    }

    setPhone(phone : number) : void {
        this.phone = phone;
    }

    setHouseNameOrNumber(houseNameOrNumber : string) : void {
        this.houseNameOrNumber = houseNameOrNumber;
    }

    setStreet(street : string) : void {
        this.street = street;
    }

    setState(state : string) : void {
        this.state = state;
    }

    setPostcode(postcode : number) : void {
        this.postcode = postcode;
    }

    setCountry(country : string) : void {
        this.country = country;
    }
}