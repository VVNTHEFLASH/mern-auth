import React, { useState } from 'react';
import axios from "axios";
import VoteForm from "./VoteForm";



export default function Vote(props) {

    const [filteredParty, setFilteredParty] = useState("DMK")

    const filterChangeHandler = party => {
        setFilteredParty(party)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const votes = {
            votedParty: filteredParty,
            voteStatus: true,
        }
        console.log(votes);

        axios.put("/api/voters/" + props.match.params.id, votes)
            .then(result => console.log(result.data));

        // window.location = "/dashboard#/vote";
}  
  return (
    <div>
<div className='center white-text'><h4>Voting Dashboard</h4></div>
        <div className='center white-text'><h6>Vote Your Favorite Party</h6></div>
        <div>
        <form onSubmit={onSubmitHandler}>
            <table>
                <thead>
                    <tr className='white-text'>
                        <th>Party</th>
                        <th>Leader Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='orange-text'>
                        <td>DMK</td>
                        <td>M.K.Stalin</td>
                        <td rowSpan={2} colSpan={2}>
                            <VoteForm selected={filteredParty} onChangeFilter={filterChangeHandler} />
                        </td>
                        {/* <td className='btn orange' onClick={this.VotingHandler} id="DMK">Vote</td> */}
                    </tr>
                    <tr className='green-text'>
                        <td>ADMK</td>
                        <td>Edapadi</td>
                        {/* <td className='btn green' onClick={this.VotingHandler} id="ADMK">Vote</td> */}
                    </tr>
                    <tr className='yellow-text'>
                        <td>BJP</td>
                        <td>N.S.Modi</td>
                        <td rowSpan={2}>
                        <button type='submit' className='btn'>Vote</button>
                        </td>
                        {/* <td className='btn yellow' onClick={this.VotingHandler} id="BJP">Vote</td> */}
                    </tr>
                    <tr className='white-text'>
                        <td>N.O.T.A</td>
                        <td>-</td>
                        {/* <td className='btn grey' onClick={this.VotingHandler} id="NOTA">Vote</td> */}
                    </tr>
                </tbody>
            </table>
            </form>
        </div>
    </div>
  )
}
