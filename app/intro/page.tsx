// Server Component
import { N_CHUNKS, REST_CHUNKS, O_PATH_D, O_EASE_SAMPLES, NOUR_VIEWBOX, NOUR_STROKE_WIDTH } from "@/lib/nour-path";
import IntroStage from "./IntroStage";

export default function IntroPage() {
  return (
    <IntroStage
      nChunks={N_CHUNKS}
      restChunks={REST_CHUNKS}
      oPath={O_PATH_D}
      oEaseSamples={O_EASE_SAMPLES}
      nourViewBox={NOUR_VIEWBOX}
      nourStrokeWidth={NOUR_STROKE_WIDTH}
    />
  );
}
