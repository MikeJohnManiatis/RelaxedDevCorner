import React, {Component} from 'react'
import { Container} from 'reactstrap';
import AppNavbar from './AppNavBar'

export default class AlgorithmPuzzles extends Component
{
    constructor(){
        super();
        this.state = {};
      }


    render() {
        return <>
            <AppNavbar/>
                <div className="jumbotron">
                    <h1>View & Practice Various Algorithmic Puzzles</h1>
                </div>



                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <a href="/ViewPuzzle/MaxDepthTree">
                                    <button className="btn btn-primary btn-block">
                                        Max Depth Tree
                                    </button>
                                </a>

                            </div>
                            <div className="col-sm">
                                <a href="/ViewPuzzle/TwoSum">
                                    <button className="btn btn-primary btn-block">
                                        Two Sum
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>


            
        </>
    }
}