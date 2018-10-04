import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderDish() {
        return (
            <Card>
                <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                <CardBody>
                    <CardTitle>{this.props.dish.name}</CardTitle>
                    <CardText>{this.props.dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments() {
        const comments = this.props.dish.comments.map(comment => {
            return (
                <div key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {comment.date}</p>
                </div>
            );
        });

        if (!!this.props.dish.comments)
            return (
                <div>
                    <h4>Comments</h4>
                    {comments}
                </div>
            );
        else return <div></div>
    }

    render() {
        if (!!this.props.dish)
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish()}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {this.renderComments()}
                        </div>
                    </div>
                </div>
            );
        else return (<div></div>);
    }
}

export default DishDetail;