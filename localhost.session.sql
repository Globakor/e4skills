SELECT students.student_id,students.studentName,students.email,enrollment.course_id
FROM students
INNER JOIN enrollment
ON students.student_id = enrollment.student_id;
