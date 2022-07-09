import React from 'react'

export default function VoteForm(props) {

    const onChangeVotingHandler = event => {
        props.onChangeFilter(event.target.value)
    }

  return (
    <div>
        <div>
            <label className='white-text'>Select Party</label>
                <select id='select' value={props.selected} onChange={onChangeVotingHandler}>
                    {/* <option disabled selected>Select</option> */}
                    <option value="DMK">DMK</option>
                    <option value="ADMK">ADMK</option>
                    <option value="BJP">BJP</option>
                    <option value="NOTA">NOTA</option>
                </select>
        </div>
    </div>
  )
}
