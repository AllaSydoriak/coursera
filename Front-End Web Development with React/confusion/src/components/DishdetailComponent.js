import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const RenderDish = ({ dish }) => {
  return (
    <Card>
      <CardImg top src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
};

const RenderComments = ({ comments }) => {
  return (
    <div>
      <h4>Comments</h4>
      {comments !== null ? (
        <div className="container">
          <ul class="list-unstyled">
            {comments.map(item => (
              <li>
                <p>{item.comment}</p>
                <p>{`-- ${item.author}, ${new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit"
                }).format(new Date(Date.parse(item.date)))}`}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

const DishDetail = props => {
  const { dish } = props;
  if (dish != null)
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments comments={dish.comments} />
        </div>
      </div>
    );
  else return <div />;
};

export default DishDetail;
