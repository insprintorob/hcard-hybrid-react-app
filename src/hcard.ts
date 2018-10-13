/**
 * Model class for a HCard
 *
 * An instance of this class can be written to MongoDB directly
 */
export default class HCard {
    private givenName : string;
    private surname : string;
    private email : string;
    private phone : string;
    private houseNameOrNumber : string;
    private street : string;
    private suburb : string;
    private state : string;
    private postcode : string;
    private country : string;
    private created : number; // In Unix time

    setGivenName(givenName : string) : HCard {
        this.givenName = givenName;
        return this;
    }

    setSurname(surname : string) : HCard {
        this.surname = surname;
        return this;
    }

    setEmail(email : string) : HCard {
        this.email = email;
        return this;
    }

    setPhone(phone : string) : HCard {
        this.phone = phone;
        return this;
    }

    setHouseNameOrNumber(houseNameOrNumber : string) : HCard {
        this.houseNameOrNumber = houseNameOrNumber;
        return this;
    }

    setStreet(street : string) : HCard {
        this.street = street;
        return this;
    }

    setSuburb(suburb : string) : HCard {
        this.suburb = suburb;
        return this;
    }

    setState(state : string) : HCard {
        this.state = state;
        return this;
    }

    setPostcode(postcode : string) : HCard {
        this.postcode = postcode;
        return this;
    }

    setCountry(country : string) : HCard {
        this.country = country;
        return this;
    }

    setCreated(created : number) : HCard {
        this.created = created;
        return this;
    }
}