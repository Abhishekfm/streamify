// components/KeyMetrics.jsx
import {
  Analytics,
  AttachMoney,
  Home,
  MusicNote,
  People,
  Settings,
  VideoLibrary,
  MenuOpen,
  Menu,
} from "@mui/icons-material";
import CurrencyExchange from "@mui/icons-material/CurrencyExchange";
import StarIcon from "@mui/icons-material/Star";
import GroupIcon from "@mui/icons-material/Group";

export default function KeyMetrics({ data }) {
  return (
    <div className="flex w-full flex-wrap gap-4  pb-8 ">
      <MetricCard
        title="Total Users"
        value={data.totalUsers.value.toLocaleString()}
        icon={<GroupIcon />}
        increaseBy={data.totalUsers.increaseInPercent}
      />
      <MetricCard
        title="Active Users"
        value={data.activeUsers.value.toLocaleString()}
        icon="🔥"
        increaseBy={data.activeUsers.increaseInPercent}
      />
      <MetricCard
        title="Total Streams"
        value={data.totalStreams.value.toLocaleString()}
        icon={<MusicNote />}
        increaseBy={data.totalStreams.increaseInPercent}
      />
      <MetricCard
        title="Revenue"
        value={data.revenue.value.toLocaleString()}
        icon={<CurrencyExchange />}
        increaseBy={data.revenue.increaseInPercent}
      />
      <MetricCard
        title="Top Artist"
        value={data.topArtist.value.toLocaleString()}
        icon={<StarIcon />}
        withRef={false}
        increaseInStream={data.topArtist.increaseInStream}
      />
      {/* Add other metrics */}
    </div>
  );
}

function MetricCard({
  title,
  value,
  icon,
  increaseBy,
  withRef = true,
  increaseInStream,
}) {
  return (
    <div className="p-4 min-w-56 min-h-30 bg-white rounded-lg shadow-sm">
      <div className="flex mb-3 justify-between gap-3">
        <div>
          <p className="text-gray-400  text-md font-semibold">{title}</p>
          <p className="text-2xl text-black font-bold">{value}</p>
        </div>
        <span className="text-2xl">{icon}</span>
      </div>
      <div>
        {withRef && increaseBy > 0 ? (
          <p className="text-green-500 font-semibold">
            +{increaseBy}% from last month
          </p>
        ) : (
          withRef && (
            <p className="text-red-600 font-semibold">
              {increaseBy}% from last month
            </p>
          )
        )}
        {increaseInStream && increaseInStream > 0 && (
          <p className="text-green-500 font-semibold">
            {increaseInStream}M Streams this month
          </p>
        )}
      </div>
    </div>
  );
}
