import React, { useEffect,useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacityBase,
  useColorScheme,
  View,
  TouchableOpacity,
  Linking
} from 'react-native';
import { SelectCountry } from 'react-native-element-dropdown';
import {Text,Button, Card, ActivityIndicator,Searchbar} from 'react-native-paper';
const App=()=>{
  const [NewsData,setNewsData]=useState([]);
  const [SearchNewsData,setSearchNewsData]=useState([]);
  const [country, setCountry] = useState('in');
  const [category,setCategory]=useState('general')
  const [searchQuery, setSearchQuery] = useState('');
  const url=`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=75ad8592e74d4f539795082beae5efe9`;
  useEffect(()=>{
  fetch(url)
  .then(response=>response.json())
  .then((json)=>{setNewsData(json.articles)})
  .catch((error)=>{
    console.log(error)
  })
},[country,category,url])

const handleSearch=async(searchQuery)=>{
if(searchQuery==='')
setSearchQuery('')
else{
  const url=`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=75ad8592e74d4f539795082beae5efe9`
  await fetch(url)
  .then(response=>response.json())
  .then((json)=>setSearchNewsData(json.articles))
  .catch((error)=>{
    console.log(error)
  })
}

}


const [all,setAll]=useState('contained');
const [bus,setBus]=useState('text');
const [ent,setEnt]=useState('text');
const [gen,setGen]=useState('text');
const [hel,setHel]=useState('text');
const [sci,setSci]=useState('text');
const [sport,setSport]=useState('text');
const [tech,setTech]=useState('text');

const handleAll=()=>{
  setAll('contained')
  setBus('text')
  setEnt('text')
  setGen('text')
  setHel('text')
  setSci('text')
  setSport('text')
  setTech('text')
  setCategory('general')
  // setUrl('https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=75ad8592e74d4f539795082beae5efe9')
}
const handleBus=()=>{
  setBus('contained')
  setAll('text')
  setEnt('text')
  setGen('text')
  setHel('text')
  setSci('text')
  setSport('text')
  setTech('text')
  setCategory('business')
  // setUrl('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=75ad8592e74d4f539795082beae5efe9')
}
const handleEnt=()=>{
  setEnt('contained')
  setGen('text')
  setBus('text')
  setAll('text')
  setCategory('entertainment')
  // setUrl('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=75ad8592e74d4f539795082beae5efe9')
  setHel('text')
  setSci('text')
  setSport('text')
  setTech('text')
}
const handleHel=()=>{
  setHel('contained')
  setGen('text')
  setBus('text')
  setAll('text')
  setEnt('text')
  setSci('text')
  setSport('text')
  setTech('text')
  setCategory('health')
  // setUrl('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=75ad8592e74d4f539795082beae5efe9')
}
const handleSci=()=>{
  setSci('contained')
  setGen('text')
  setBus('text')
  setAll('text')
  setEnt('text')
  setHel('text')
  setSport('text')
  setTech('text')
  setCategory('science')
  // setUrl('https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=75ad8592e74d4f539795082beae5efe9')
}
const handleSp=()=>{
  setSport('contained')
  setGen('text')
  setBus('text')
  setAll('text')
  setEnt('text')
  setHel('text')
  setSci('text')
  setTech('text')
  setCategory('sports')
  // setUrl('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=75ad8592e74d4f539795082beae5efe9')
}
const handleTec=()=>{
  setTech('contained')
  setGen('text')
  setBus('text')
  setAll('text')
  setEnt('text')
  setHel('text')
  setSci('text')
  setSport('text')
  setCategory('technology')
  // setUrl('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=75ad8592e74d4f539795082beae5efe9')
  
}
//countries with iso code and flag-image url
const local_data = [
  {
    value: 'in',
    lable: 'IN',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/india-flag-png-large.png',
    },
  },
  {
    value: 'ae',
    lable: 'AE',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/united-arab-emirates-flag-png-large.png',
    },
  },
  {
    value: 'ar',
    lable: 'AR',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-7-2048x1283.jpg',
    },
  },
  {
    value: 'at',
    lable: 'AT',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-10-2048x1365.jpg',
    },
  },
  {
    value: 'au',
    lable: 'AU',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-9-2048x1024.jpg',
    },
  },
  {
    value: 'be',
    lable: 'BE',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-18-2048x1775.jpg',
    },
  },
  {
    value: 'bg',
    lable: 'BG',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/bulgaria-flag-png-large.png',
    },
  },
  {
    value: 'br',
    lable: 'BR',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/brazil-flag-png-large.png',
    },
  },
  {
    value: 'ca',
    lable: 'CA',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/canada-flag-png-large.png',
    },
  },
  {
    value: 'ch',
    lable: 'CH',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/switzerland-flag-png-large.png',
    },
  },

    {
    value: 'cn',
    lable: 'CN',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/china-flag-png-large.png',
    },
  },
    {
    value: 'co',
    lable: 'CO',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/colombia-flag-png-large.png',
    },
  },
    {
    value: 'cu',
    lable: 'CU',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/cuba-flag-png-large.png',
    },
  },
    {
    value: 'cz',
    lable: 'CZ',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/czech-republic-flag-png-large.png',
    },
  },
     {
    value: 'de',
    lable: 'DE',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/germany-flag-png-large.png',
    },
  },
     {
    value: 'eg',
    lable: 'EG',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/egypt-flag-png-large.png',
    },
  },
     {
    value: 'fr',
    lable: 'FR',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/france-flag-png-large.png',
    },
  },
     {
    value: 'gb',
    lable: 'GB',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-large.png',
    },
  },
     {
    value: 'gr',
    lable: 'GR',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/greece-flag-png-large.png',
    },
  },
  {
    value: 'hk',
    lable: 'HK',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/hongkong-flag-jpg-xl.jpg',
    },
  },
  {
    value: 'hu',
    lable: 'HU',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/hungary-flag-png-large.png',
    },
  },
  {
    value: 'id',
    lable: 'ID',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/indonesia-flag-png-large.png',
    },
  },
  {
    value: 'ie',
    lable: 'IE',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/ireland-flag-png-large.png',
    },
  },
  {
    value: 'il',
    lable: 'IL',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/israel-flag-png-large.png',
    },
  },
  {
    value: 'it',
    lable: 'IT',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/italy-flag-png-large.png',
    },
  },
  {
    value: 'jp',
    lable: 'JP',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/japan-flag-png-large.png',
    },
  },
  {
    value: 'kr',
    lable: 'KR',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/south-korea-flag-png-large.png',
    },
  },
  {
    value: 'lt',
    lable: 'LT',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/lithuania-flag-png-large.png',
    },
  },
  {
    value: 'lv',
    lable: 'LV',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/latvia-flag-png-large.png',
    },
  },
  {
    value: 'ma',
    lable: 'MA',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/morocco-flag-png-large.png',
    },
  },
  {
    value: 'mx',
    lable: 'MX',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/mexico-flag-png-large.png',
    },
  },
  {
    value: 'my',
    lable: 'MY',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/malaysia-flag-png-large.png',
    },
  },
  {
    value: 'ng',
    lable: 'NG',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/nigeria-flag-png-large.png',
    },
  },
  {
    value: 'nl',
    lable: 'NL',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/netherlands-flag-png-large.png',
    },
  },
  {
    value: 'no',
    lable: 'NO',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/norway-flag-png-large.png',
    },
  },
  {
    value: 'nz',
    lable: 'NZ',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/new-zealand-flag-png-large.png',
    },
  },
  {
    value: 'ph',
    lable: 'PH',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/philippines-flag-png-large.png',
    },
  },
  {
    value: 'pl',
    lable: 'PL',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/poland-flag-png-large.png',
    },
  },
  {
    value: 'pt',
    lable: 'PT',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/portugal-flag-400.png',
    },
  },
  {
    value: 'ro',
    lable: 'RO',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/romania-flag-png-large.png',
    },
  },
  {
    value: 'rs',
    lable: 'RS',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/serbia-flag-png-large.png',
    },
  },
  {
    value: 'ru',
    lable: 'RU',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/russia-flag-png-large.png',
    },
  },
  {
    value: 'sa',
    lable: 'SA',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/saudi-arabia-flag-png-large.png',
    },
  },
  {
    value: 'se',
    lable: 'SE',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/sweden-flag-png-large.png',
    },
  },
  {
    value: 'sg',
    lable: 'SG',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/singapore-flag-png-large.png',
    },
  },
  {
    value: 'si',
    lable: 'SI',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/slovenia-flag-png-large.png',
    },
  },
  {
    value: 'sk',
    lable: 'SK',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/slovakia-flag-png-large.png',
    },
  },
  {
    value: 'th',
    lable: 'TH',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/thailand-flag-png-large.png',
    },
  },
  {
    value: 'tr',
    lable: 'TR',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/turkey-flag-png-large.png',
    },
  },
  {
    value: 'tw',
    lable: 'TW',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/taiwan-flag-png-large.png',
    },
  },
  {
    value: 'ua',
    lable: 'UA',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/ukraine-flag-png-large.png',
    },
  },
  {
    value: 'us',
    lable: 'US',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png',
    },
  },
  {
    value: 've',
    lable: 'VE',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/venezuela-flag-png-large.png',
    },
  },
  {
    value: 'za',
    lable: 'ZA',
    image: {
      uri: 'https://www.countryflags.com/wp-content/uploads/south-africa-flag-png-large.png',
    },
  },
];


  return(
    <View style={{flex:1,paddingTop:20,backgroundColor:'#f5f2ed'}}>
       <Text style={{textAlign:'center'}} variant='titleLarge'>Welcome to News Flasher</Text>
       <View style={{flexDirection:'row'}}>
       <Searchbar
       placeholder='Enter any keyword'
       style={{flex:1,marginTop:15,marginLeft:20,backgroundColor:'#d0d0d0',width:100,height:50}}
       onChangeText={(searchQuery)=>{handleSearch(searchQuery),setSearchQuery(searchQuery)}}
       value={searchQuery}
       />
        <SelectCountry
        style={styles.dropdown}
        selectedTextStyle={styles.selectedTextStyle}
        placeholderStyle={styles.placeholderStyle}
        imageStyle={styles.imageStyle}
       iconStyle={styles.iconStyle}
        maxHeight={200}
        value={country}
        data={local_data}
        valueField="value"
        labelField="lable"
        imageField="image"
        onChange={e => {
          setCountry(e.value);
        }}
      />
      </View>
      <View style={{flex:1}}>
        {searchQuery?null: 
        <ScrollView horizontal={true} style={{paddingTop:5,paddingBottom:5,backgroundColor:'#f5f2ed'}}>
      <Button mode={all} onPress={handleAll} style={{marginLeft:5,}} textColor={all=='contained'?'#e1e3de':'#acaaa8'} buttonColor={all=='contained'?'#23233D':'#f5f2ed'} >All</Button>
      <Button mode={bus} onPress={handleBus} style={{marginLeft:5,}} textColor={bus=='contained'?'#e1e3de':'#acaaa8'} buttonColor={bus=='contained'?'#23233D':'#f5f2ed'}>Business</Button>
      <Button mode={ent} onPress={handleEnt} style={{marginLeft:5,}}  textColor={ent=='contained'?'#e1e3de':'#acaaa8'} buttonColor={ent=='contained'?'#23233D':'#f5f2ed'}>Entertainment</Button>
      <Button mode={hel} onPress={handleHel} style={{marginLeft:5,}} textColor={hel=='contained'?'#e1e3de':'#acaaa8'} buttonColor={hel=='contained'?'#23233D':'#f5f2ed'}>Health</Button>
      <Button mode={sci} onPress={handleSci} style={{marginLeft:5,}}  textColor={sci=='contained'?'#e1e3de':'#acaaa8'} buttonColor={sci=='contained'?'#23233D':'#f5f2ed'}>Science</Button>
      <Button mode={sport} onPress={handleSp} style={{marginLeft:5,}}  textColor={sport=='contained'?'#e1e3de':'#acaaa8'}buttonColor={sport=='contained'?'#23233D':'#f5f2ed'}>Sports</Button>
      <Button mode={tech} onPress={handleTec} style={{marginLeft:5,marginRight:5}}  textColor={tech=='contained'?'#e1e3de':'#acaaa8'}buttonColor={tech=='contained'?'#23233D':'#f5f2ed'}>Technology</Button>
    </ScrollView>}
      
      <View style={{flex:200,paddingHorizontal:20,backgroundColor:'#f5f2ed'  }}>
        
          {searchQuery?
          <FlatList
        data={SearchNewsData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card style={{marginBottom:10,marginTop:10,backgroundColor:'#faf5ed'}}>
            <Card.Cover source={{uri:item.urlToImage==null?'https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg':item.urlToImage}}/>
            <Card.Content>      
              <Text variant='bodyLarge' style={{marginTop:15}}>{item.title}</Text>
              <Button buttonColor='#d0d0d0' mode='contained-tonal' style={{margin:10,}} onPress={()=>Linking.openURL(item.url)}>Read Article</Button>
            </Card.Content>
          </Card> 
          )}/>
          :<FlatList
          data={NewsData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Card style={{marginBottom:10,marginTop:10,backgroundColor:'#faf5ed'}}>
              <Card.Cover source={{uri:item.urlToImage==null?'https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg':item.urlToImage}}/>
              <Card.Content>      
                <Text variant='bodyLarge' style={{marginTop:15}}>{item.title}</Text>
                <Button buttonColor='#d0d0d0' mode='contained-tonal' style={{margin:10,}} onPress={()=>Linking.openURL(item.url)}>Read Article</Button>
              </Card.Content>
            </Card> 
            )}/>}
           
      </View>
    </View>
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    width: 100,
    backgroundColor: '#d0d0d0',
    borderRadius: 22,
    paddingHorizontal: 8,
  },
  imageStyle: {
    width: 24,
    height: 24,
    resizeMode:'cover',
    borderRadius: 12,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
    color:'black'
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});