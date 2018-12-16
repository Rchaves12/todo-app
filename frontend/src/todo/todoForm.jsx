import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props =>{
    const keyHandler = (e)=>{
        if(e.key ==='Enter'){
            e.shiftKey ? props.heandleSearch() : props.handleAdd()
        }else if(e.key === 'Escape'){
            props.heandleClear()
        }
    }
    return (
        <div role='from' className='todoForm'>
            <Grid cols ='12 9 10'>
                <input type="text" id='description' className='form-control' 
                placeholder='Adicionar uma tarefa' value={props.description} 
                onChange={props.heandleChange} onKeyUp={keyHandler} />
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton style='primary' icon='plus'
                    onClick={props.handleAdd}></IconButton>
                <IconButton style='info' icon ='search'
                    onClick={props.heandleSearch}></IconButton>
                <IconButton style='default' icon ='close'
                    onClick={props.heandleClear}></IconButton>
            </Grid>
        </div>
    )
}