import React from 'react';
import { View, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


const BookSlider = (props) => {

    const first = [
        
        { 
            id : 1,
            img : "https://images-na.ssl-images-amazon.com/images/I/813JfJQwefL.jpg",
            name : "Harry Potter",
            description : "Et NAnnananna"
        },
        { 
            id : 2,
            img : "https://images-na.ssl-images-amazon.com/images/I/813JfJQwefL.jpg",
            name : "Harry Potter",
            description : "Et NAnnananna"
        },
        { 
            id : 3,
            img : "https://images-na.ssl-images-amazon.com/images/I/813JfJQwefL.jpg",
            name : "Harry Potter",
            description : "Et NAnnananna"
        },
        { 
            id : 4,
            img : "https://images-na.ssl-images-amazon.com/images/I/813JfJQwefL.jpg",
            name : "Harry Potter",
            description : "Et NAnnananna"
        },
        { 
            id : 5,
            img : "https://images-na.ssl-images-amazon.com/images/I/813JfJQwefL.jpg",
            name : "Harry Potter",
            description : "Et NAnnananna"
        },
    ]


    const BookOfSlide = ({item}) => {
        console.log(item)
        return (
            <Image style={{width:120, height:180}} source={{uri : item.img}}></Image>
        )
    }


    return ( 
        <View style={{flex : 1}}>
            <Text>Ma Liste</Text>
            <FlatList 
                horizontal={true}
                ItemSeparatorComponent={() => <View style={{width: 5}}/>}
                data={first}
                renderItem={({item}) => <BookOfSlide item={item}></BookOfSlide>} 
            />
        </View>
     );
}
 
export default BookSlider;