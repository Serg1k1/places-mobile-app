import PlaceForm from "../components/Places/PlaceForm";
import { insertPlace } from "../util/database";

const AddPlace = ({ navigation }) => {
    async function createPlaceForm(place) {
        await insertPlace(place);
        navigation.navigate("AllPlaces")
    }

    return (
        <PlaceForm onCreatePlace={createPlaceForm} />
    )
}

export default AddPlace;