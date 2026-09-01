import BlogPostLayout, { BlogExternalLink, BlogH2, BlogLi, BlogLink, BlogOl, BlogP, BlogUl } from "@/components/blog-post-layout"
import { getBlogPost } from "@/lib/blog-posts"

const post = getBlogPost("first-pilates-class")

export default function FirstPilatesClassContent() {
  return (
    <BlogPostLayout
      post={post}
      intro={
        <BlogP>
          If you&apos;ve been putting off trying <BlogLink href="/pilates-grantham">Pilates in Grantham</BlogLink>{" "}
          because you&apos;re not sure what to expect, here&apos;s a complete walkthrough.
        </BlogP>
      }
      cta={
        <>
          <strong>Ready for your first class?</strong>{" "}
          <BlogLink href="/book">Book your first Pilates class in Grantham</BlogLink> or{" "}
          <BlogLink href="/pilates-grantham">see our full class schedule and pricing</BlogLink>. New clients can also
          complete the <BlogLink href="/new-patient">new patient form</BlogLink> in advance to save time on arrival.
        </>
      }
    >
      <BlogH2 id="before-you-book-mat-or-reformer">Before you book: Mat or Reformer?</BlogH2>
      <BlogP>
        Both formats are beginner-friendly. Mat Pilates uses only body weight on a floor mat, while Reformer Pilates
        uses a spring-resistance machine that can support and guide movement. If you&apos;re unsure which to start with,
        see our full comparison in{" "}
        <BlogLink href="/blog/reformer-vs-mat-pilates">
          Reformer vs Mat Pilates: What&apos;s the Difference?
        </BlogLink>
        , or simply ask when you book. We&apos;re happy to recommend a starting point.
      </BlogP>

      <BlogH2 id="what-to-wear">What to wear</BlogH2>
      <BlogUl>
        <BlogLi>
          <strong>Fitted, stretchy clothing</strong>: leggings or fitted joggers and a fitted top. Loose clothing can
          catch on equipment, particularly on the Reformer.
        </BlogLi>
        <BlogLi>
          <strong>Socks</strong>: required at most studios for hygiene; grip socks are recommended for Reformer Pilates
          as they help with stability on the carriage and footbar.
        </BlogLi>
        <BlogLi>
          <strong>No jewellery that could catch or dangle</strong>: best left at home or securely tucked away.
        </BlogLi>
      </BlogUl>

      <BlogH2 id="what-to-bring">What to bring</BlogH2>
      <BlogUl>
        <BlogLi>A water bottle</BlogLi>
        <BlogLi>A small towel, if you prefer one</BlogLi>
        <BlogLi>
          Any relevant medical information (recent injuries, surgeries, or conditions) to mention to your instructor.
          You don&apos;t need to bring paperwork, just be ready to talk through it
        </BlogLi>
      </BlogUl>

      <BlogH2 id="arriving-at-the-studio">Arriving at the studio</BlogH2>
      <BlogP>Plan to arrive 10–15 minutes early for your first visit. This gives time to:</BlogP>
      <BlogOl>
        <BlogLi>
          Complete a brief health questionnaire (standard practice, not a barrier; it just helps your instructor adapt
          the class to you).
        </BlogLi>
        <BlogLi>Meet your instructor and mention any injuries, conditions, or concerns.</BlogLi>
        <BlogLi>
          Get oriented in the space before the class starts, especially useful for a first Reformer session.
        </BlogLi>
      </BlogOl>
      <BlogP>
        Our studio is at 71 Castlegate, Grantham, NG31 6SQ. See{" "}
        <BlogLink href="/contact">directions and contact details here</BlogLink>.
      </BlogP>

      <BlogH2 id="what-happens-during-the-class">What happens during the class</BlogH2>
      <BlogP>A beginner-friendly Pilates class generally follows this shape:</BlogP>
      <BlogUl>
        <BlogLi>
          <strong>Warm-up</strong>: gentle movement to prepare the body and introduce breathing technique.
        </BlogLi>
        <BlogLi>
          <strong>Core exercises</strong>: a series of controlled movements building core strength, alignment, and body
          awareness, adapted to your ability.
        </BlogLi>
        <BlogLi>
          <strong>Instructor guidance throughout</strong>: cues on form and breathing, and hands-on or verbal
          adjustments as needed.
        </BlogLi>
        <BlogLi>
          <strong>Cool-down</strong>: gentle stretching to finish.
        </BlogLi>
      </BlogUl>
      <BlogP>
        In a small group setting (our Reformer classes are limited to five people), you get real attention rather than
        being lost in a crowd, which matters most in your first few sessions. If you&apos;ve been inactive for a while or
        have a medical condition, the{" "}
        <BlogExternalLink href="https://www.nhs.uk/live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/">
          NHS&apos;s physical activity guidelines
        </BlogExternalLink>{" "}
        recommend a quick check with your GP first, and it&apos;s worth mentioning this to your instructor too so your
        first class can be paced accordingly.
      </BlogP>

      <BlogH2 id="will-it-be-hard">Will it be hard?</BlogH2>
      <BlogP>
        A well-run first class should feel challenging but manageable. Pilates works muscles, particularly deep core
        muscles, that many people don&apos;t normally engage, so it&apos;s common to notice new sensations or mild
        muscle soreness afterward. It shouldn&apos;t feel overwhelming or painful; if something doesn&apos;t feel right,
        say so during the class so your instructor can adjust.
      </BlogP>

      <BlogH2 id="after-your-first-class">After your first class</BlogH2>
      <BlogP>
        Mild muscle soreness a day or two later (sometimes called DOMS) is normal and usually fades as your body adapts.
        Staying hydrated and moving gently helps. If you experience sharp pain rather than general muscle fatigue,
        mention it to your instructor before your next session.
      </BlogP>
      <BlogP>
        Many beginners find that a short series of classes, rather than a single session, is what really shows the
        benefit, as technique and confidence build over the first few weeks.
      </BlogP>
    </BlogPostLayout>
  )
}
