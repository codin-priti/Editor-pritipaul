import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

const padding = 30;
const box = (width - padding) / 5;
const mediaBox = (width - padding - 27) / 3;

export default StyleSheet.create({
  screenGradient: {
    flex: 1,
    padding: 20,
  },

  card: {
    padding: 20,
    shadowOpacity: 0.4,
    shadowRadius: 25,
    elevation: 10,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    alignItems: "center",
  },

  topTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },

  topRightIcons: {
    flexDirection: "row",
    gap: 14,
  },

  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  sectionTop: {
    borderRadius: 16,
    marginBottom: 14,
    overflow: "hidden",
    shadowColor: "#5500ff",
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },

  sectionInner: {
    padding: 18,
    borderRadius: 16,
  },

  sectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  sectionsubTitle: {
    color: "#ccccff",
    fontSize: 13,
    marginTop: 10,
    lineHeight: 18,
  },

  sectionIconCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#00ffff",
  },

  valuesContainer: {
    marginTop: 30,
    marginBottom: 30,
  },

  valuesHeading: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  valuesTitle: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 8,
    fontWeight: "600",
  },

  valuesTable: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  valueButton: {
    width: box,
    height: box,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    borderWidth: 1.8,
    borderColor: "#8833ff",
  },

  valueButtonSelected: {
    borderColor: "#ff00ff",
    borderWidth: 3,
    backgroundColor: "rgba(255,0,255,0.2)",
  },

  valueText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 10,
    fontWeight: "600",
  },

  valueCircle: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  valueCount: {
    color: "#aaa",
    fontSize: 13,
  },

  customButton: {
    color: "#ff00ff",
    fontSize: 14,
    fontWeight: "600",
  },

  mediaSection: {
    marginBottom: 20,
  },

  mediaTable: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
    marginTop: 15,
  },

  mediaButton: {
    width: mediaBox,
    height: mediaBox,
  },

  mediaGradient: {
    flex: 1,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#d200ff",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    shadowColor: "#d200ff",
    shadowOpacity: 0.6,
    shadowRadius: 14,
    elevation: 12,
    backgroundColor: "rgba(50, 0, 70, 0.4)",
  },

  mediaButtonTitle: {
    color: "#fff",
    fontSize: 12,
    marginTop: 8,
    textAlign: "center",
  },

  floatingBot: {
    position: "absolute",
    bottom: 25,
    right: 25,
    zIndex: 999,
  },

  floatingBotInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#00ffff",
    shadowColor: "#00ffff",
    shadowOpacity: 0.4,
    shadowRadius: 12,
    backgroundColor: "rgba(0,0,0,0.4)",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    padding: 20,
  },

  modalCard: {
    backgroundColor: "#150022",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#5a2d91",
  },

  modalTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },

  modalsubTitle: {
    color: "#aaa",
    marginBottom: 20,
  },

  cardBox: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 15,
    borderWidth: 1.2,
    borderColor: "#5522aa",
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  cardTitle: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 8,
  },

  cardsubTitle: {
    color: "#ddd",
    fontSize: 13,
    lineHeight: 18,
  },

  primaryCard: {
    backgroundColor: "#6a00ff",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 10,
  },

  primaryTitle: {
    color: "#fff",
    fontWeight: "600",
  },

  secondaryCard: {
    backgroundColor: "#2d0047",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#6b4bff66",
    marginBottom: 10,
  },

  secondCardTitle: {
    color: "#a68aff",
  },

  progressContainer: {
    width: "100%",
    height: 6,
    backgroundColor: "#3b2a56",
    borderRadius: 4,
    overflow: "hidden",
    marginTop: 5,
  },

  progressFill: {
    width: "60%",
    height: "100%",
    backgroundColor: "#ff0088",
  },

  progressTitle: {
    color: "#fff",
    marginTop: 5,
    marginBottom: 20,
    fontSize: 12,
  },

    closeModalButton: {
  position: "absolute",
  top: 12,
  right: 12,
  padding: 8,
},

  
});
