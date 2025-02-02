/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { DataTable } from "../components/DataTable"; // Adjust path as needed

// Mock data
const mockData = [
  {
    id: 1,
    userId: "user001",
    artist: "The Weeknd",
    song: "Blinding Lights",
    date: "2024-01-15",
    streams: 1500,
  },
  {
    id: 2,
    userId: "user002",
    artist: "Miley Cyrus",
    song: "Flowers",
    date: "2023-12-02",
    streams: 1200,
  },
];

describe("DataTable Component", () => {
  test("renders the table with correct columns", () => {
    render(<DataTable data={mockData} />);

    // Check if table headers exist
    expect(screen.getByText("User ID")).toBeInTheDocument();
    expect(screen.getByText("Artist Name")).toBeInTheDocument();
    expect(screen.getByText("Song Name")).toBeInTheDocument();
    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("Streams")).toBeInTheDocument();
  });

  test("renders the correct number of rows", async () => {
    render(<DataTable data={mockData} />);

    // Ensure both mock rows are rendered
    expect(screen.getByText("Blinding Lights")).toBeInTheDocument();
    expect(screen.getByText("Flowers")).toBeInTheDocument();
  });
});
