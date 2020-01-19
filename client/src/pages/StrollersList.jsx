import React, { Component } from 'react'
import ReactTable from 'react-table-6'
import api from '../api'

import styled from 'styled-components'

import 'react-table-6/react-table.css'

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`
class StrollersList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      strollers: [],
      columns: [],
      isLoading: false,
    }
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true })
    console.log(24)
    await api.getStrollers().then(strollers => {
      console.log(25, strollers)
      this.setState({
        strollers: strollers.data.data,
        isLoading: false
      })
    })
  }

  render() {
    const { strollers, isLoading} = this.state
    console.log('TCL: StrollersList -> render -> strollers', strollers)

    const columns = [
      {
        Header: 'ID',
        accessor: '_id',
        filterable: true
      },      {
        Header: 'Name',
        accessor: 'name',
        filterable: true
      },      {
        Header: 'Manufacturer',
        accessor: 'manufacturer',
        filterable: true
      },      {
        Header: 'Weight',
        accessor: 'weight',
        filterable: true
      },
    ]

    let showTable = true
    if (!strollers.length) showTable = false

    return (
      <Wrapper>
        {showTable && (
          <ReactTable
            data={strollers}
            columns={columns}
            loading={isLoading}
            defaultPageSize={10}
            showPageSizeOptions={true}
            minRows={0}
            />
        )}
      </Wrapper>
      )
  }
}

export default StrollersList
