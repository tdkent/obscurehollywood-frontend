import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react";
import { renderWithRouter } from "@/test/render";

const homeHeading = "Neglected films.Stars of the past.The obscure revisited.";

// Mock intersection observer API: https://vitest.dev/guide/mocking/globals
const IntersectionObserverMock = vi.fn(
	class {
		disconnect = vi.fn();
		observe = vi.fn();
		takeRecords = vi.fn();
		unobserve = vi.fn();
	},
);

vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);

/**
 * ROUTE TESTS
 * Test that defined routes render the correct UI
 * Test that undefined routes render 404 UI
 */
describe("App root layer", () => {
	it("renders Index page at /", () => {
		act(async () => {
			renderWithRouter("/");
			expect(
				await screen.findByRole("heading", { name: homeHeading }),
			).toBeInTheDocument();
		});
	});

	it("renders Features page at /features", () => {
		act(async () => {
			renderWithRouter("/features");
			expect(
				await screen.findByRole("heading", { name: "Features" }),
			).toBeInTheDocument();
		});
	});

	it("renders correct Feature Article page at /features/corriganville", () => {
		act(async () => {
			renderWithRouter("/features/corriganville");
			expect(
				await screen.findByRole("heading", { name: "Corriganville" }),
			).toBeInTheDocument();
		});
	});

	it("renders Films page at /films", () => {
		act(async () => {
			renderWithRouter("/films");
			expect(
				await screen.findByRole("heading", { name: "Films" }),
			).toBeInTheDocument();
		});
	});

	it("renders correct Film Article page at /films/the-americano-1916", () => {
		act(async () => {
			renderWithRouter("/films/the-americano-1916");
			expect(
				await screen.findByRole("heading", { name: "The Americano" }),
			).toBeInTheDocument();
		});
	});

	it("renders People page at /people", () => {
		act(async () => {
			renderWithRouter("/people");
			expect(
				await screen.findByRole("heading", { name: "People" }),
			).toBeInTheDocument();
		});
	});

	it("renders correct Person Article page at /people/alma-rubens", () => {
		act(async () => {
			renderWithRouter("/people/alma-rubens");
			expect(
				await screen.findByRole("heading", { name: "Alma Rubens" }),
			).toBeInTheDocument();
		});
	});

	it("renders Quiz page at /quiz", () => {
		act(async () => {
			renderWithRouter("/quiz");
			expect(
				await screen.findByRole("heading", { name: "Quizzes" }),
			).toBeInTheDocument();
		});
	});

	it("renders correct Quiz page at /quiz/at-the-movies", () => {
		act(async () => {
			renderWithRouter("/quiz/at-the-movies");
			expect(
				await screen.findByRole("heading", { name: /at the movies/i }),
			).toBeInTheDocument();
		});
	});

	it("renders My Quizzes page at /my-quizzes", () => {
		act(async () => {
			renderWithRouter("/my-quizzes");
			expect(
				await screen.findByRole("heading", { name: /my quizzes/i }),
			).toBeInTheDocument();
		});
	});

	it("renders Search page at /search", () => {
		act(async () => {
			renderWithRouter("/search");
			expect(
				await screen.findByRole("heading", { name: "Search Results" }),
			).toBeInTheDocument();
		});
	});

	it("renders Studios page at /studios", () => {
		act(async () => {
			renderWithRouter("/studios");
			expect(
				await screen.findByRole("heading", { name: "Studios" }),
			).toBeInTheDocument();
		});
	});

	it("renders correct Studio Article page at /studios/paramount-pictures", () => {
		act(async () => {
			renderWithRouter("/studios/paramount-pictures");
			expect(
				await screen.findByRole("heading", { name: "Paramount Pictures" }),
			).toBeInTheDocument();
		});
	});

	it("renders correct Tag Article page at /tags/decade-1930s", () => {
		act(async () => {
			renderWithRouter("/tags/decade-1930s");
			expect(
				await screen.findByRole("heading", { name: /Decade: 1930s/i }),
			).toBeInTheDocument();
		});
	});

	it("renders 404 page at unknown routes", () => {
		act(async () => {
			renderWithRouter("/bad-route");
			expect(
				await screen.findByRole("heading", { name: /404/i }),
			).toBeInTheDocument();
		});
	});
});

/**
 * NAVIGATION TESTS
 * Test primary navigation elements.
 */
describe("Root nav element", () => {
	const user = userEvent.setup();

	/**
	 * Mobile navigation tests
	 */

	it("navigates from /home to /features using mobile nav", () => {
		act(async () => {
			renderWithRouter("/");
			const link = await screen.findByTestId("mobile-features-link");
			await user.click(link);
			expect(
				await screen.findByRole("heading", { name: "Features" }),
			).toBeInTheDocument();
		});

		// await user.click(screen.getByTestId("mobile-features-link"));
	});

	it("navigates from /features to /films using mobile nav", () => {
		act(async () => {
			renderWithRouter("/features");
			const link = await screen.findByTestId("mobile-films-link");
			await user.click(link);
			expect(
				await screen.findByRole("heading", {
					name: "Films",
				}),
			).toBeInTheDocument();
		});
	});

	it("navigates from /films to /people using mobile nav", () => {
		act(async () => {
			renderWithRouter("/films");
			const link = await screen.findByTestId("mobile-people-link");
			await user.click(link);
			expect(
				await screen.findByRole("heading", {
					name: "People",
				}),
			).toBeInTheDocument();
		});
	});

	it("navigates from /people to home page using mobile nav", () => {
		act(async () => {
			renderWithRouter("/people");

			const link = await screen.findByTestId("mobile-home-link");
			await user.click(link);
			expect(
				await screen.findByRole("heading", {
					name: homeHeading,
				}),
			).toBeInTheDocument();
		});
	});

	it("navigates from /features/corriganville to home page using mobile nav", () => {
		act(async () => {
			renderWithRouter("/features/corriganville");
			const link = await screen.findByTestId("mobile-home-link");
			await user.click(link);
			expect(
				await screen.findByRole("heading", {
					name: homeHeading,
				}),
			).toBeInTheDocument();
		});
	});

	it("navigates from /films/the-americano-1916 to home using mobile nav", () => {
		act(async () => {
			renderWithRouter("/films/the-americano-1916");
			const link = await screen.findByTestId("mobile-home-link");
			await user.click(link);
			expect(
				await screen.findByRole("heading", {
					name: homeHeading,
				}),
			).toBeInTheDocument();
		});
	});

	it("navigates from /people/alma-rubens to home using mobile nav", () => {
		act(async () => {
			renderWithRouter("/people/alma-rubens");

			const link = await screen.findByTestId("mobile-home-link");
			await user.click(link);
			expect(
				await screen.findByRole("heading", {
					name: homeHeading,
				}),
			).toBeInTheDocument();
		});
	});

	it("navigates from /studios/paramount-pictures to home using mobile nav", () => {
		act(async () => {
			renderWithRouter("/studios/paramount-pictures");
			const link = await screen.findByTestId("mobile-home-link");
			await user.click(link);
			expect(
				await screen.findByRole("heading", {
					name: homeHeading,
				}),
			).toBeInTheDocument();
		});
	});

	it("navigates from /tags/decade-1930s to home using mobile nav", () => {
		act(async () => {
			renderWithRouter("/tags/decade-1930s");
			const link = await screen.findByTestId("mobile-home-link");
			await user.click(link);
			expect(
				await screen.findByRole("heading", {
					name: homeHeading,
				}),
			).toBeInTheDocument();
		});
	});

	it("navigates from Quiz index page to home page using mobile nav", () => {
		act(async () => {
			renderWithRouter("/quiz");
			const link = await screen.findByTestId("mobile-home-link");
			await user.click(link);
			expect(
				await screen.findByRole("heading", {
					name: homeHeading,
				}),
			).toBeInTheDocument();
		});
	});

	it("navigates from At the Movies quiz page to home page using mobile nav", () => {
		act(async () => {
			renderWithRouter("/quiz/at-the-movies");
			const link = await screen.findByTestId("mobile-home-link");
			await user.click(link);
			expect(
				await screen.findByRole("heading", {
					name: homeHeading,
				}),
			).toBeInTheDocument();
		});
	});

	it("navigates from My Quizzes page to home page using mobile nav", () => {
		act(async () => {
			renderWithRouter("/my-quizzes");
			const link = await screen.findByTestId("mobile-home-link");
			await user.click(link);
			expect(
				await screen.findByRole("heading", {
					name: homeHeading,
				}),
			).toBeInTheDocument();
		});
	});

	it("navigates from Not Found to home page using mobile nav", () => {
		act(async () => {
			renderWithRouter("/bad-route");
			const link = await screen.findByTestId("mobile-home-link");
			await user.click(link);
			expect(
				await screen.findByRole("heading", {
					name: homeHeading,
				}),
			).toBeInTheDocument();
		});
	});

	/**
	 * Desktop navigation tests
	 */

	it("features nav link points to features page", () => {
		act(async () => {
			await renderWithRouter("/");
			const link = await screen.findByTestId("features-link");

			expect(link).toHaveAttribute(
				"href",

				expect.stringContaining("/features"),
			);
		});
	});

	it("films nav link points to films page", () => {
		act(async () => {
			await renderWithRouter("/");

			const link = await screen.findByTestId("films-link");

			expect(link).toHaveAttribute(
				"href",

				expect.stringContaining("/films"),
			);
		});
	});

	it("people nav link points to people page", () => {
		act(async () => {
			await renderWithRouter("/");
			const link = await screen.findByTestId("people-link");

			expect(link).toHaveAttribute(
				"href",

				expect.stringContaining("/people"),
			);
		});
	});

	it("quiz nav link points to quiz page", () => {
		act(async () => {
			await renderWithRouter("/");

			const link = await screen.findByTestId("quiz-link");

			expect(link).toHaveAttribute(
				"href",

				expect.stringContaining("/quiz"),
			);
		});
	});
});
