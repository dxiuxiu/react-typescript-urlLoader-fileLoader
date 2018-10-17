import * as React from 'react'
import m1 from './img/1.png'

import './index.less'
export default class Test extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }
    componentDidMount () {
        console.log('图片地址')
        console.log(m1)
    }


    render() {
        return (
            <div className='test'>
                <span>图片引入测试</span>
                <br/>
                <img src={m1} alt='test-m1' title='test-m1'/>
            </div>
        )
    }
} 