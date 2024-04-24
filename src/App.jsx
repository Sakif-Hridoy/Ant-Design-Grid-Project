import { Card, Image, Input, List, Space, Typography } from 'antd';

import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [searchedText,setSearchedText] = useState("");
  const [dataSource,setDataSource] = useState([])

  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
fetch(`https://dummyjson.com/products/search?q=${searchedText}`)
.then(res => res.json())
.then((data)=>{
  setLoading(false)
  setDataSource(data.products)});
  },[searchedText])

  return (
    <Space style={{padding:"0px 16px"}}direction='vertical'>
      <Typography.Title style={{textAlign:"center",fontFamily:"monospace"}}>Antd Gallery</Typography.Title>


      <Input.Search style={{maxWidth:500,display:"flex",margin:"auto",marginBottom:50}}
      onSearch={(value)=>{
        setSearchedText(value)
      }}
      ></Input.Search>

      <List loading={loading} dataSource={dataSource}
      grid={{xs:1,sm:2,md:3,lg:4,xl:5,xxl:6}}
      renderItem={(item)=>{
        return <Card key={item.id} style={{height:300,margin:12}}>
          <Image src={item.thumbnail}></Image>
        </Card>
      }}></List>

    </Space>
  )
}

export default App
