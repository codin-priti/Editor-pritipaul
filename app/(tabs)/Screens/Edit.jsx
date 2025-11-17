import React, { useState } from "react";
import {
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import {
  Anchor,
  Bot,
  FileText,
  Image as ImageIcon,
  Lightbulb,
  MessageCircle,
  MessageSquareCode,
  Play,
  Settings,
  Sparkles,
  User,
  X
} from "lucide-react-native";

import styles from "../Screens/Styleedit.js";

export default function Editor() {
  const [selectedValues, setSelectedValues] = useState([]);
  const [toggleMission, setToggleMission] = useState(false);
  const [togglePurpose, setTogglePurpose] = useState(false);
  const [toggleVision, setToggleVision] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const allValues = [
    "Innovation",
    "Trust",
    "Authenticity",
    "Growth",
    "Resilience",
    "Collaboration",
    "Empathy",
    "Integrity",
    "Transparency",
    "Indusivity",
    "Excellence",
  ];

  const selectValue = (item) => {
    if (selectedValues.includes(item)) {
      setSelectedValues(selectedValues.filter((v) => v !== item));
    } else if (selectedValues.length < 10) {
      setSelectedValues([...selectedValues, item]);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#070010" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={["#0a0015", 
            "#15002e", 
            "#240048"]}
          style={styles.screenBackground}
        >
          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.topTitle}>Edit </Text>

              <View style={styles.topRightIcons}>
                <LinearGradient
                  colors={["#00ffff55", 
                    "#0088ff55"]}
                  style={styles.iconCircle}
                >
                  <User size={20} color="#00ffff" />
                </LinearGradient>

                <LinearGradient
                  colors={["#ff00ff55", 
                    "#9900ff55"]}
                  style={styles.iconCircle}
                >
                  <Settings size={20} color="#ff00ff" />
                </LinearGradient>
              </View>
            </View>

            <TouchableOpacity
              style={styles.cardSection}
              onPress={() => setToggleMission(!toggleMission)}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={["#1d0035",
                   "#330060"]}
                style={styles.sectionInner}
              >
                <View style={styles.sectionRow}>
                  <Text style={styles.sectionTitle}>Mission Statement</Text>
                  <View style={styles.sectionIconCircle}>
                    <Bot size={18} color="#00ffff" />
                  </View>
                </View>

                {toggleMission && (
                  <Text style={styles.sectionsubTitle}>
                    Define the core purpose and mission of your company here.
                  </Text>
                )}
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.sectionTop}
              onPress={() => setTogglePurpose(!togglePurpose)}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={["#260033", "#40005e"]}
                style={styles.sectionInner}
              >
                <View style={styles.sectionRow}>
                  <Text style={styles.sectionTitle}>Purpose & Why</Text>
                  <View style={styles.sectionIconCircle}>
                    <Bot size={18} color="#00ffff" />
                  </View>
                </View>

                {togglePurpose && (
                  <Text style={styles.sectionsubTitle}>
                    Explain the deeper purpose behind your company’s existence.
                  </Text>
                )}
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.sectionTop}
              onPress={() => setToggleVision(!toggleVision)}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={["#30003c", "#54006f"]}
                style={styles.sectionInner}
              >
                <View style={styles.sectionRow}>
                  <Text style={styles.sectionTitle}>Long-Term Vision</Text>
                  <View style={styles.sectionIconCircle}>
                    <Bot size={18} color="#00ffff" />
                  </View>
                </View>

                {toggleVision && (
                  <Text style={styles.sectionsubTitle}>
                    Describe your company’s future aspirations and long-term
                    goals.
                  </Text>
                )}
              </LinearGradient>
            </TouchableOpacity>

            <View style={styles.valuesContainer}>
              <View style={styles.valuesHeading}>
                <Anchor size={20} color="#ff00ff" />
                <Text style={styles.valuesTitle}>Core Values & Traits</Text>
              </View>

             

                                <View style={styles.valuesTable}>
                {allValues.map((e) => (
                  <TouchableOpacity key={e} onPress={() => selectValue(e)}>
                    <LinearGradient
                      colors={
                        selectedValues.includes(e)
                          ? ["#ff00ff88", "#ff00ff55"]
                          : ["#1a003355", "#2b005599"]
                      }
                      style={[
                        styles.valueButton,
                        selectedValues.includes(e) &&
                          styles.valueButtonSelected,
                      ]}
                    >
                      <Text style={styles.valueText}>{e}</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                ))}
              </View>

               

              <View style={styles.valueCircle}>
                <Text style={styles.valueCount}>
                  {selectedValues.length} of 10 selected
                </Text>
                <TouchableOpacity>
                  <Text style={styles.customButton}>Add Custom Value</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* To show Media & Testimonials section */}
            <View style={styles.mediaSection}>
              <View style={styles.valuesHeader}>
  {/* <View style={{ paddingRight: 6 }}>
    <Film size={20} color="#ff00ff" />
  </View> */}

  <Text style={styles.valuesTitle}>Media & Testimonials</Text>
</View>


              <View style={styles.mediaTable}>
                <TouchableOpacity style={styles.mediaButton}>
                  <LinearGradient
                    colors={["#400068", "#7a00b8", "#b300ff"]}
                    style={styles.mediaGradient}
                  >
                    <ImageIcon size={40} color="#e38cff" />
                    <Text style={styles.mediaButtonTitle}>Photos</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={styles.mediaButton}>
                  <LinearGradient
                    colors={["#400068", "#7a00b8", "#b300ff"]}
                    style={styles.mediaGradient}
                  >
                    <Play size={40} color="#e38cff" />
                    <Text style={styles.mediaButtonTitle}>Videos</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={styles.mediaButton}>
                  <LinearGradient
                    colors={["#400068", "#7a00b8", "#b300ff"]}
                    style={styles.mediaGradient}
                  >
                    <MessageCircle size={40} color="#e38cff" />
                    <Text style={styles.mediaButtonTitle}>Testimonials</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
{/* To show the floating AI BOT button */}
      <TouchableOpacity
        style={styles.floatingBot}
        onPress={() => setShowModal(true)}
        activeOpacity={0.9}
      >
        <LinearGradient
          colors={["#00ffff55", "#0088ff55"]}
          style={styles.floatingBotInner}
        >
          <Bot size={28} color="#00ffff" />
        </LinearGradient>
      </TouchableOpacity>

      {/* To show the AI MODAL */}
      <Modal transparent visible={showModal} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
              <TouchableOpacity
    style={styles.closeModalButton}
    onPress={() => setShowModal(false)}
  >
    <X size={22} color="#fff" />
  </TouchableOpacity>

            <Bot size={32} color="#ff69ff" />
            <Text style={styles.modalTitle}>AI Assistant</Text>
            <Text style={styles.modalsubTitle}>Culture & Value guide</Text>

            <LinearGradient
              colors={["#2a004b", "#3b0068"]}
              style={styles.cardBox}
            >
              <View style={styles.cardHeader}>
                <Lightbulb size={18} color="#ffffffff" />
                <Text style={styles.cardTitle}>Quick Tip</Text>
              </View>

              <Text style={styles.cardsubTitle}>
                Your mission should clearly state what you do and why it matters
                to your audience.
              </Text>
            </LinearGradient>

            <LinearGradient
              colors={["#2a004b", "#3b0068"]}
              style={styles.cardBox}
            >
              <View style={styles.cardHeader}>
                <Sparkles size={18} color="#ffffffff" />
                <Text style={styles.cardTitle}>Suggestion</Text>
              </View>

              <Text style={styles.cardsubTitle}>
                Consider adding values like “emotional intelligence” and
                “authentic connection” that align with your company’s core
                purpose.
              </Text>
            </LinearGradient>

         <TouchableOpacity style={styles.primaryCard}>
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <Sparkles size={16} color="white" />
    <Text style={[styles.primaryTitle, { marginLeft: 8 }]}>
      Generate from documents
    </Text>
  </View>
</TouchableOpacity>

           
<TouchableOpacity style={styles.secondaryCard}>
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <FileText size={16} color="white" />
    <Text style={[styles.secondCardTitle, { marginLeft: 8 }]}>
      Upload Company Docs
    </Text>
  </View>
</TouchableOpacity>

<TouchableOpacity style={styles.secondaryCard}>
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <MessageSquareCode size={16} color="white" />
    <Text style={[styles.secondCardTitle, { marginLeft: 8 }]}>
      Chat With AI
    </Text>
  </View>
</TouchableOpacity>


           
            <View style={styles.progressContainer}>
              <View style={styles.progressFill} />
            </View>

            <Text style={styles.progressTitle}>Completion 60%</Text>

           
           
          </View>
        </View>
      </Modal>
    </View>
  );
}

