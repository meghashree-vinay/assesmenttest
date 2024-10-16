import React ,{useState} from 'react'
import './App.css';

function App() {
  const [blueTokenSeq, setBlueTokenSeq] = useState(); 
  const [blueTokenPrefix, setBlueTokenPrefix] = useState();
  const [blueTokenPerRow, setBlueTokenPerRow] = useState()
  
  const [redTokenSeq, setRedTokenSeq] = useState();
  const [redTokenPrefix, setRedTokenPrefix] = useState();
  const [redTokenPerRow, setRedTokenPerRow] = useState();
  const [blueTokenList, setBlueTokenList] = useState([]);
  const [redTokenList, setRedTokenList] = useState([]);

  const [error, setError] = useState(false);


  const clearInput = () => {
    setBlueTokenSeq(undefined)
    setBlueTokenPrefix(undefined)
    setBlueTokenPerRow(undefined)
    setRedTokenSeq(undefined)
    setRedTokenPrefix(undefined)
    setRedTokenPerRow(undefined)
    setBlueTokenList([])
    setRedTokenList([])
    setError(false)
  }


  const onClickGenerate = () => {
    if (blueTokenSeq && blueTokenPrefix && blueTokenPerRow && redTokenSeq && redTokenPrefix && redTokenPerRow) {
      setError(false)
      let bList = []
      let bSubList=[]
      for (let i = 1; i <= blueTokenSeq; i++){
        
        if (bSubList.length == blueTokenPerRow ) {
          bList.push(bSubList)
          bSubList=[]
        
          
         
        }
        bSubList.push(
          blueTokenPrefix+i
        )
      }
      if(bSubList.length>0 )
        {
          bList.push(bSubList)
        }

      console.log(bList)
      setBlueTokenList(bList);
      let rList = []
      let rSubList=[]
      for (let i = 1; i <= redTokenSeq; i++){
        
        if ( rSubList.length == redTokenPerRow  ) {
          rList.push(rSubList)
          rSubList=[]
        
          
         
        }
        rSubList.push(
          redTokenPrefix+i
        )
      }

      if(rSubList.length>0 )
        {
          rList.push(rSubList)
        }
      console.log(rList)
      setRedTokenList(rList)
    } else {
      setError(true);

      
    }
    
  }


  return (
    <div className="App">
      <h1>Token Generator Application</h1>
      <form>

        <label>Number of blue tokens:  </label> 
        <input
          type="number"
          className="form-control"
          value={blueTokenSeq}
          placeholder="Number of blue tokens"
          
          onChange={(e) => {
            setBlueTokenSeq(e.target.value);
          }}
        /> 
        <br/> 
        <br/> 

        <label>Blue token prefix: </label> 
        <input
          type="text"
          className="form-control"
          value={blueTokenPrefix}
          placeholder="Blue token prefix"
          
          onChange={(e) => {
            setBlueTokenPrefix(e.target.value);
          }}
        />  

        <br/> 
        <br/> 

        <label>Blue token per row :</label> 
        <input
          type="number"
          className="form-control"
          value={blueTokenPerRow}
          placeholder="blue token per row"
          
          onChange={(e) => {
            setBlueTokenPerRow(e.target.value);
          }}
        /> 
          <br/> 
          <br/> 

        {/* red */}
        
        Number of red tokens
        <input
          type="number"
          className="form-control"
          value={redTokenSeq}
          placeholder="Number of red tokens"
          
          onChange={(e) => {
            setRedTokenSeq(e.target.value);
          }}
        />  

        <br/> 
        <br/> 

        Red token prefix
        <input
          type="text"
          className="form-control"
          value={redTokenPrefix}
          placeholder="Red token prefix"
          onChange={(e) => {
            setRedTokenPrefix(e.target.value);
          }}
        /> 
        <br/> 
        <br/>  

        Red token per row
        <input
          type="number"
          className="form-control"
          value={redTokenPerRow}
          placeholder="Red token per row"
          min={0}
          onChange={(e) => {
            setRedTokenPerRow(e.target.value);
          }}
        />
        
         <br/> 
         <br/> 


         <button
      className='m-2'
      
        onClick={(e) => {
          e.preventDefault()
          onClickGenerate();
        }}
      >
        Generate
      </button> 

      <button
      className='m-2'
      
        onClick={(e) => {
          e.preventDefault()
          clearInput()
        }}
      >
        Clear
      </button>

      <br/>
      {
        error&&
        <p className='text-danger'>
          input all the feilds
        </p>
      }
      </form>
      <br/>
      <br/>
      {blueTokenList.length > 0 &&
        
        blueTokenList.map((sublist, key) => (
          <div className='horizontal-list' key={key} >
            {sublist.map((item, key2) => (
              <div key={key } style={{backgroundColor: "blue",width:"60px",height:"60px",margin:"4px"}} >
            
                {item}
              
              </div>
            ))}   
            {
              <br/>
            }
          </div>
        ))
      }
      
      {redTokenList.length > 0 &&
        
        redTokenList.map((sublist, key) => (
          <div className='horizontal-list' key={key} >
            {sublist.map((item, key2) => (
              <div key={key } style={{backgroundColor: "red",width:"60px",height:"60px",margin:"4px"}} >
            
                {item}
              
              </div>
            ))}   
            {
              <br/>
            }
          </div>
        ))
      }

      
 
    </div>
  );
}

export default App;