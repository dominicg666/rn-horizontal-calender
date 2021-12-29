import { StyleSheet } from "react-native";
import { Fonts, Size } from '../../../theme';

export default StyleSheet.create({
  //CALENDAR STYLES
  calendarContainer: {
    overflow: "hidden"
  },
  datesStrip: {
     flexDirection: "row",
     flex: 1,
     alignItems: "center",
     justifyContent: "space-between",

  },
  dayContainer:{
    paddingVertical:8,
  },
  calendarDates: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  calendarHeader: {
    fontFamily:Fonts.LexendRegular,
    alignSelf: "flex-start",
    fontSize:16,
    fontWeight:"400"
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    fontSize:14,
    fontFamily:Fonts.LexendMedium,
    fontWeight:"500"
  },
  icon: {
    resizeMode: "contain"
  },

  //CALENDAR DAY
  dateRootContainer: {
    flex: 1
  },
  dateContainer: {
    justifyContent: "center",
    // alignItems: "center",
    // alignSelf: "center",
  },
  dateName: {
    textAlign: "center",
  },
  weekendDateName: {
    color: "#A7A7A7",
    textAlign: "center"
  },
  dateNumber: {
    textAlign: "center",
    fontSize:16,
    fontFamily:Fonts.LexendRegular,
    fontWeight:"400"
  },
  weekendDateNumber: {
    color: "#A7A7A7",
    fontWeight: "bold",
    textAlign: "center"
  },
  dot: {
    width: 6,
    height: 6,
    marginTop: 1,
    borderRadius: 5,
    opacity: 0
  },

  // CALENDAR DOTS
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  visibleDot: {
    opacity: 1,
    backgroundColor: 'blue'
  },
  selectedDot: {
    backgroundColor: 'blue'
  },

  // Calendar Lines
  line: {
    height: 4,
    marginTop: 3,
    borderRadius: 1,
    opacity: 0
  },
  linesContainer: {
    justifyContent: 'center'
  },
  visibleLine: {
    opacity: 1,
    backgroundColor: 'blue'
  },
  selectedLine: {
    backgroundColor: 'blue'
  },
  weekStyle:{
    paddingBottom:2
  }
});