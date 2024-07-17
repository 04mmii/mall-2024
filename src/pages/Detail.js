import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap';


function Detail(props) {

    let {id} = useParams();
    let [ alert, setAlert ] = useState(true);
    let [탭, set탭] = useState(0);

    useEffect(()=> {
        setTimeout(()=>{ setAlert(false) }, 2000)
    }, [])

    return(
        <div className="container">
            {
                alert == true
                ? <div className="alert alert-warning">
                    2초 이내 구매시 할인
                    </div>
                : null
            }


            


            <div className="row">
                <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                <h4 className="pt-5">{props.shose[id].title}</h4>
                <p>{props.shose[id].content}</p>
                <p>{props.shose[id].price}</p>
                <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>

            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                <Nav.Link onClick={()=>{ set탭(0) }} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link onClick={()=>{ set탭(1) }} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link onClick={()=>{ set탭(2) }} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent 탭={탭} shose={props.shose} />

        </div>
    )
}

function TabContent({탭, shose}){

    let [fade, setFade] = useState("")
    useEffect(()=> {
        setTimeout(() => {
            setFade('end')
        }, 100);
    
        return()=> {
            setFade('')
        }
    },[탭])

    return <div className={'start ' + fade}>
        { [<div>{shose[0].title}</div>, <div>내용1</div>, <div>내용2</div> ][탭]}
    </div>
  }

export default Detail;