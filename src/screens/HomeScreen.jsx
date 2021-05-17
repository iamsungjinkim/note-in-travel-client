import React, { useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import Profile from "../components/shared/Profile";
import GoogleMap from "../components/shared/GoogleMap";
import IconButton from "../components/shared/IconButton";
import CoursePreviewList from "../components/shared/CoursePreviewList";
import REGION from "../constants/region";

import THEME from "../constants/theme";
import useCourses from "../hooks/useCourses";
import { selectUser } from "../reducers/userSlice";
import generateSpatialHashGrid from "../utils/generateSpatialHashGrid";

function HomeScreen({ navigation }) {
  const { name, photoUrl } = useSelector(selectUser);
  const [targetCourses, setTargetCourses] = useState(null);
  const courses = useCourses([]);
  const segments = useMemo(() => {
    if (!courses) return;

    return generateSpatialHashGrid(REGION.korea, courses)
      .flat()
      .filter((segment) => segment);
  }, [courses]);

  useFocusEffect(useCallback(() => (
    () => setTargetCourses(null)
  ), []));

  function handleNewCourseButtonPress() {
    navigation.navigate("NewCourse");
  }

  function handleSegmentPress(segment) {
    setTargetCourses(segment);
  }

  function handlePreviewPress(courseId) {
    navigation.navigate("CourseDetail", { id: courseId });
  }

  return (
    <View style={styles.container}>
      <GoogleMap
        style={styles.maps}
        region={REGION.korea}
        zoomEnabled={false}
        scrollEnabled={false}
        segments={segments}
        onSegmentPress={handleSegmentPress}
      />
      {targetCourses
        ? (
          <CoursePreviewList
            style={styles.courses}
            courses={targetCourses}
            onPreviewPress={handlePreviewPress}
          />
        )
        : <Profile name={name} photoUrl={photoUrl} />}
      <IconButton
        style={styles.button}
        name="plus-circle"
        color={THEME.color.accent}
        size={40}
        onPress={handleNewCourseButtonPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  maps: {
    height: "70%",
    borderRadius: 20,
  },
  courses: {
    height: "20%",
  },
  button: {
    height: "8%",
  },
});

export default HomeScreen;
