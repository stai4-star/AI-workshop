# Roadmap
## What this is
A task tracker for Shannon Tai. People sign in, add tasks with deadlines, and their tasks auto-sort so the nearest deadline is always first — wrapped in a pink, clean-girl-aesthetic UI.

## What Done means
A stranger can go to the live site, create an account, log in, add a task with a deadline, and see their tasks — sorted with the nearest deadline on top — still there the next time they log in. The whole app is styled consistently in pink (#FFD0D7 background, #E75480 accent) with black, white, and red accents.

## Slices
1. Auth | done-criteria: person signs up and lands on a logged-in page; person logs out and back in and reaches the same page; a logged-out person visiting the logged-in page is redirected to /login | status: ACTIVE
2. Persisted tasks | done-criteria: added task appears immediately; tasks survive a page refresh; completing/deleting a task persists after refresh; two accounts never see each other's tasks | status: pending
3. Auto-sort + aesthetic UI | done-criteria: tasks display soonest-deadline-first on load with no user action; overdue tasks are visibly flagged; every page consistently uses the pink/black/white/red palette; tasks with no deadline sort to the bottom | status: pending

## Backlog
Tags/categories, reminders or notifications, recurring tasks, drag-and-drop reordering, search/filter, priority levels, sharing/collaboration on tasks, dark mode, animations beyond the base theme, mobile app.
