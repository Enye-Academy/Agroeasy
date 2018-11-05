import React, { Component } from 'react';

class ListProducers extends Component{
    constructor(){
        super();
        this.state = {
            producers: []
        };
    }

    componentDidMount(){
        fetch('http://localhost:4000/producers')
       .then(results=>{
            return results.json();

        }).then(obj=>{
                
            let producers = obj.data.map(item=>{
                
                return(
                    <div key= {Math.random()*10000}>
                    <table style={{borderCollapse: 'collapse', width: '100%'}}>
                    <tr >
                        <td style={{ height:'30px', width: '39%' }}><h3> {item.firstName} </h3> </td>
                        <td style={{ height:'30px', width: '37%' }}><h3> {item.lastName} </h3> </td>
                        <td style={{ height:'30px', width: '39%' }}><h3> {item.phoneNumber} </h3> </td>
                   </tr>
                    </table>
                   </div>
                );
            });
            
        this.setState({producers});
        console.log('state', this.state.producers); 
        });

    }

    render(){
        return(
            <div>
                <div style={{width:'1000px'}}>
                    {this.state.producers}
                </div>
            </div>
        );
    }
}
export default ListProducers;