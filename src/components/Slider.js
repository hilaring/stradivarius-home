import React from 'react'

export default class Slider extends React.Component {

    state = {
        image: 'https://static.e-stradivarius.net/5/static2/homes/2020_rebajas_OI_2/img/mkt-w/1920/2400_newin_w2.jpg?t=20210118023001',
        text: '',
        loading: true
    }

    async componentDidMount() {
        const titleUrl = 'https://random-word-api.herokuapp.com/word?number=1';
        const response = await fetch(titleUrl);
        const data = await response.json()
        this.setState({text: data, loading: false})
    }

    render(){
        return (
            <>
                {this.state.loading || !this.state.text ? (
                    <div>
                        <h2>Loading...</h2>
                    </div>
                ) : (
                    <div>
                        <img src={this.state.image} alt={this.state.text}/>
                        <p>{this.state.text}</p>
                    </div>
                )}        
            </>
        )
    }
}

