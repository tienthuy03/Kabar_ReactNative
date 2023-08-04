import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import color from '../../../contains/color'

const Explore = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}>
      <Text style={styles.textExplore}>Explore</Text>
      <View style={styles.title}>
        <Text style={styles.textTopic}>Topic</Text>
        <Text style={styles.textSeeAll}>See all</Text>
      </View>
      <View style={styles.listTopic}>
        <View style={styles.cardTopic}>
          <Image
            style={styles.imgCardTopic}
            source={require('../../../media/images/TopicImages.png')} />
          <View style={styles.content}>
            <Text style={styles.textTitle}>Health</Text>
            <Text style={styles.textContent}>Get energizing workout moves, healthy recipes...</Text>
          </View>
          <View style={styles.save}>
            <Text style={styles.textSave}>Save</Text>
          </View>
        </View>
        <View style={styles.cardTopic}>
          <Image
            style={styles.imgCardTopic}
            source={require('../../../media/images/TopicImages.png')} />
          <View style={styles.content}>
            <Text style={styles.textTitle}>Health</Text>
            <Text style={styles.textContent}>Get energizing workout moves, healthy recipes...</Text>
          </View>
          <View style={styles.saved}>
            <Text style={styles.textSaved}>Saved</Text>
          </View>
        </View>
        <View style={styles.cardTopic}>
          <Image
            style={styles.imgCardTopic}
            source={require('../../../media/images/TopicImages.png')} />
          <View style={styles.content}>
            <Text style={styles.textTitle}>Health</Text>
            <Text style={styles.textContent}>Get energizing workout moves, healthy recipes...</Text>
          </View>
          <View style={styles.saved}>
            <Text style={styles.textSaved}>Saved</Text>
          </View>
        </View>
        <Text style={styles.textPopular}>Popular Topic</Text>
        <View style={styles.cardPopular}>
          <Image
            style={styles.imgPopular}
            source={require('../../../media/images/imgItem.png')} />
          <View style={styles.contentPopular}>
            <Text style={styles.textEur}>Europe</Text>
            <Text style={styles.textRussian}>Russian warship: Moskva sinks in Black Sea</Text>
            <View style={styles.information}>
              <View style={styles.logo}>
                <Image
                  style={styles.imgLogo}
                  source={require('../../../media/images/Ellipse.png')} />
                <Text style={styles.textBBC}>BBC News</Text>
              </View>
              <View style={styles.time}>
                <Image
                  style={styles.imgTime}
                  source={require('../../../media/images/clock.png')} />
                <Text style={styles.textTime}>4h ago</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cardPopular}>
          <Image
            style={styles.imgPopular}
            source={require('../../../media/images/imgItem.png')} />
          <View style={styles.contentPopular}>
            <Text style={styles.textEur}>Europe</Text>
            <Text style={styles.textRussian}>Russian warship: Moskva sinks in Black Sea</Text>
            <View style={styles.information}>
              <View style={styles.logo}>
                <Image
                  style={styles.imgLogo}
                  source={require('../../../media/images/Ellipse.png')} />
                <Text style={styles.textBBC}>BBC News</Text>
              </View>
              <View style={styles.time}>
                <Image
                  style={styles.imgTime}
                  source={require('../../../media/images/clock.png')} />
                <Text style={styles.textTime}>4h ago</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Explore

const styles = StyleSheet.create({
  cardPopular: {
    marginTop: 16
  },
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
  textBBC: {
    marginLeft: 4,
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 19.5,
    letterSpacing: 0.12,
    textAlign: 'center',
    color: color.black,
  },
  imgLogo: {
    width: 30,
    height: 30
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  information: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  textRussian: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: color.black
  },
  textEur: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 19.5,
    letterSpacing: 0.12,
    color: color.color_hint,
    marginTop: 4
  },
  imgPopular: {
    width: 340,
    height: 200,
    borderRadius: 6
  },
  textPopular: {
    marginTop: 20,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.12,
    color: color.black
  },
  textSaved: {
    top: 3,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: color.background
  },
  saved: {
    width: 78,
    height: 34,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: color.background,
    alignItems: 'center',
    marginTop: 16,
    backgroundColor: color.background_button,
  },
  textSave: {
    top: 3,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: color.background_button
  },
  save: {
    width: 78,
    height: 34,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: color.background_button,
    alignItems: 'center',
    marginTop: 16,
  },
  textContent: {
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 21,
    letterSpacing: 0.12,
    color: color.color_hint,
    marginTop: 4
  },
  textTitle: {
    fontWeight: '400',
    fontSize: 16,
    letterSpacing: 0.12,
    lineHeight: 24,
    color: color.black
  },
  content: {
    width: 180,
    marginLeft: 4
  },
  imgCardTopic: {
    width: 70,
    height: 70
  },
  cardTopic: {
    flexDirection: 'row',
    marginTop: 24,
    justifyContent: 'space-between',
  },
  textSeeAll: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.12,
    color: color.color_hint
  },
  textTopic: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.12,
    color: color.black
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
  },
  textExplore: {
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 48,
    letterSpacing: 0.12,
    color: color.black,
  },
  container: {
    flex: 1,
    padding: 24,
  }
})