import { StyleSheet, Text, TextInput, View, Image, ScrollView, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import color from '../../../contains/color'
import { NewsContext } from '../utilities/NewsContext'

const Bookmark = (props) => {

  const { getNews } = useContext(NewsContext)
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const result = await getNews()
      setData(result)
    }
    getData();
  }, [])

  const renderItem = (props) => {
    const { item } = props;
    const { title, image } = item
    return (
      <View style={styles.itemList}>
        <View style={styles.imgList}>
          <Image
            style={styles.itemImg}
            source={{ uri: image }} />
        </View>
        <View style={styles.content}>
          <View style={styles.contentTitle}>
            <Text style={styles.textEur}>Europe</Text>
            <Text style={styles.textUkraine}> {title}</Text>
          </View>

          <View style={styles.information}>
            <Image style={styles.imgInformation}
              source={require('../../../media/images/Ellipse.png')} />
            <Text style={styles.textInformation}>BBC News</Text>
            <View style={styles.time}>
              <Image
                style={styles.imgTime}
                source={require('../../../media/images/clock.png')} />
              <Text style={styles.textTime}>4h ago</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}>
      <Text style={styles.textBookmark}>Bookmark</Text>
      <View style={styles.search}>
        <TextInput
          placeholder='Search'
          style={styles.input} />
        <Image style={styles.icSearch}
          source={require('../../../media/images/icSearch.png')} />
        <Image style={styles.icFind}
          source={require('../../../media/images/icFind.png')} />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={Math.random}
        showsVerticalScrollIndicator={false} />
    </ScrollView>
  )
}

export default Bookmark

const styles = StyleSheet.create({

  textTime: {
    marginLeft: 4,
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 19.5,
    letterSpacing: 0.12,
    color: color.color_hint
  },
  time: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 30,
    alignItems: 'center'
  },
  contentTitle: {
    width: 300
  },
  information: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 8,
    marginTop: 4,
    alignItems: 'center',
  },
  imgInformation: {
    width: 24,
    height: 24,
  },
  textInformation: {
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 19.5,
    letterSpacing: 0.12,
    paddingLeft: 4,
    textAlign: 'center'
  },
  textUkraine: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    marginTop: 4,
    marginLeft: 4,
    color: color.black
  },
  textEur: {
    marginLeft: 8,
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 19.5,
    letterSpacing: 0.12,
    color: color.color_hint
  },
  itemList: {
    flexDirection: 'row',
    paddingTop: 16,
  },
  imgList: {
    width: 100,
    height: 100,
    borderRadius: 24,
    backgroundColor: color.background_color,
  },
  itemImg: {
    width: '100%',
    height: '100%',
    borderRadius: 12
  },
  icFind: {
    position: 'absolute',
    right: 10,
    top: 12
  },
  icSearch: {
    position: 'absolute',
    top: 12,
    left: 8
  },
  input: {
    width: '100%',
    height: 48,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: color.color_hint,
    position: 'relative',
    paddingLeft: 32
  },
  textBookmark: {
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 48,
    letterSpacing: 0.12,
    color: color.black,
  },
  container: {
    flex: 1,
    padding: 24
  }
})