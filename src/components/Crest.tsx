// The school's seal: Dr. Newton's gold crown inside a ring that names the
// school and its two distinctives. Seminaries carry their authority in a seal
// beside a serif name (Princeton Theological, Covenant), and this is that mark
// for Crown, drawn from its own crown and its own words.
// font-ok: the ring text uses the site's bundled heading face via its CSS
// variable, served by next/font from this site.
const SERIF = "var(--font-serif)";

export function Crest({
  size = 64,
  tone = "green",
  className = "",
}: {
  size?: number;
  tone?: "green" | "paper";
  className?: string;
}) {
  const ground = tone === "green" ? "#163f3a" : "transparent";
  const ink = tone === "green" ? "#e9c77b" : "#163f3a";
  const id = `crest-${tone}-${size}`;
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      role="img"
      aria-label="Seal of Crown Institute of Theology"
      className={className}
    >
      <defs>
        <path id={`${id}-top`} d="M 30 100 A 70 70 0 0 1 170 100" />
        <path id={`${id}-bot`} d="M 22 100 A 78 78 0 0 0 178 100" />
        {/* Recolor the crown to the seal's ink: the source PNG carries white
            stroke edges that showed as a broken left arm on green. */}
        <filter id={`${id}-ink`}>
          <feFlood floodColor={ink} result="c" />
          <feComposite in="c" in2="SourceAlpha" operator="in" />
        </filter>
      </defs>
      <circle cx="100" cy="100" r="97" fill={ground} />
      <circle
        cx="100"
        cy="100"
        r="92"
        fill="none"
        stroke={ink}
        strokeWidth="1.6"
      />
      <circle
        cx="100"
        cy="100"
        r="86"
        fill="none"
        stroke={ink}
        strokeWidth="0.8"
      />
      <circle
        cx="100"
        cy="100"
        r="56"
        fill="none"
        stroke={ink}
        strokeWidth="0.8"
      />
      <text
        fill={ink}
        fontFamily={SERIF}
        fontSize="15"
        fontWeight="600"
        letterSpacing="3.2"
      >
        <textPath href={`#${id}-top`} startOffset="50%" textAnchor="middle">
          CROWN INSTITUTE
        </textPath>
      </text>
      <text
        fill={ink}
        fontFamily={SERIF}
        fontSize="12.5"
        fontWeight="600"
        letterSpacing="3"
      >
        <textPath href={`#${id}-bot`} startOffset="50%" textAnchor="middle">
          OF THEOLOGY
        </textPath>
      </text>
      <circle cx="35" cy="112" r="2" fill={ink} />
      <circle cx="165" cy="112" r="2" fill={ink} />
      <image href="/brand/crown.png" x="60" y="70" width="80" height="60" filter={`url(#${id}-ink)`} />
    </svg>
  );
}
