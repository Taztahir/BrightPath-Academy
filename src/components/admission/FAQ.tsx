import FAQComponent, { FAQItem } from '../ui/FAQ'

const ADMISSIONS_FAQ_ITEMS: FAQItem[] = [
  {
    question: 'When is the application deadline?',
    answer: 'Priority applications for the upcoming fall semester are due by January 15th. We continue to accept applications on a rolling basis throughout the spring if space remains available.'
  },
  {
    question: 'Do you offer financial aid?',
    answer: "Yes, BrightPath Academy is committed to economic diversity. We offer need-based financial assistance to qualifying families. Please check the 'Financial Aid' box on your application to receive more information."
  },
  {
    question: 'What is the student-to-teacher ratio?',
    answer: 'We maintain a small, intimate learning environment with a 12:1 student-to-teacher ratio in elementary and 15:1 in middle school. This allows for highly personalized instruction.'
  }
]

export default function FAQ() {
  return (
    <FAQComponent
      title="Frequently Asked Questions"
      subtitle=""
      items={ADMISSIONS_FAQ_ITEMS}
      bgClassName="bg-[#FAF7F2]"
      allowMultiple={false}
    />
  )
}
