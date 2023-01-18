import { Placeholder } from "react-bootstrap";

import { Card } from "../../card";

const CardSkeleton = () => (
    <Card
        footer={
            <>
                <Placeholder.Button variant="outline-primary" xs={5}>
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={8} />
                    </Placeholder>
                </Placeholder.Button>
                <Placeholder.Button variant="outline-success" xs={5}>
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={8} />
                    </Placeholder>
                </Placeholder.Button>
            </>
        }
        header={
            <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
            </Placeholder>
        }
        imageUrl="movie_placeholder.webp"
    />
);

export default CardSkeleton;
