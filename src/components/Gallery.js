import React,{ Component } from 'react';
import axios from 'axios';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: []
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then((response) => {
            this.setState({
                gallery: response.data
            })
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <section>
                {this.state.gallery.map((gallery)=> (
                    <img src={gallery.thumbnailUrl} />
                ))}
            </section>
        )
    }
}

export default Gallery;