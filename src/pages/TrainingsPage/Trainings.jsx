import { TrainingsGeneral } from "../../components/TrainingsGeneral/TrainingsGeneral";
import { Container } from "./Trainings.styled";
import { trainingsData } from "../../components/ItemsTrainings/ItemsTrainings";
import { TrainingsProducts } from "../../components/TrainingsProducts/TrainingsProducts";

const Trainings = () => {
    return (
        <Container>
            <TrainingsGeneral />
            <TrainingsProducts
                products={trainingsData} />
        </Container>
    );
};

export default Trainings;