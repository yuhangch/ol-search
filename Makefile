# https://stackoverflow.com/a/47008498/2220110
args = `arg="$(filter-out $@,$(MAKECMDGOALS))" && echo $${arg:-${1}}`

# Usage: make pack [browser] to build the target package for corresponding browser.
# Example:`make pack chrome`, `make pack firefox`, `make pack edge`.
pack: assert
	@web-ext build -s extension -n ol-search-v{version}.zip -o


# The default assert target
assert-default:
	@echo "No asserting, ignored..."

# Overrides target without warning.
#
# https://stackoverflow.com/a/49804748
%: %-default
	@ true

# This allows us to accept extra arguments (by doing nothing
# when we get a job that doesn't match, rather than throwing an error).
%:
	@: