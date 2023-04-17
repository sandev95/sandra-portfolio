import React from "react";
import { Card } from "../../../../organisms/Card/Card";
import { Flex } from "../../../../atoms/Flex/Flex";
import { courses } from "../../utils/courses";

export const EducationInformation = () => {
  return (
    <Flex container flexWrap="wrap" gap="22px" justifyContent="space-around">
      {courses.map((course) => (
        <Flex key={course.title}>
          <Card course={course} />
        </Flex>
      ))}
    </Flex>
  );
};
